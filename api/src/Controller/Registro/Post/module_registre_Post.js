const { Usuario } = require('../../../db.js');
const { Op } = require('sequelize');
//const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs'); // Importa bcryptjs
const { transporter } = require('../Config_mail/mailer.js');
const { MAIL_CLUB } = process.env;

const registrar_usuario = async (req, res) => {
  try {
    const { name, Papellido, Celular, Correo, key } = req.body;

    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const secondName = nameParts.slice(1).join(' ') || '';

    const apellidoParts = Papellido.trim().split(' ');
    const firstApellido = apellidoParts[0] || '';
    const secondApellido = apellidoParts.slice(1).join(' ') || '';

    const F_Nacimiento = '00-00-0000';

    console.log('body es' + JSON.stringify(req.body));

    const consular_usuario = await Usuario.findOne({
      where: {
        [Op.or]: [
          { Mail: Correo },
          { Celular }
        ]
      }
    });

    if (consular_usuario) {
      console.log("El Usuario ya existe");
      return res.status(200).json({ message: 'El nombre del Usuario ya existe.' });
    } else {
      console.log("Se puede almacenar");

      // Generar y encriptar la contraseña
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(key, salt);

      // Generar código de verificación
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'//abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const specialChars = '1234567890@#$%?'
      let code = ''

      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        code += letters.charAt(randomIndex);
      }

      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * specialChars.length);
        code += specialChars.charAt(randomIndex);
      }

      const codeArray = code.split('');
      codeArray.sort(() => Math.random() - 0.5);
      code = codeArray.join('');

      const today = new Date();
      const Envio_Usuario_Creado = await Usuario.create({
        P_Nombre: firstName,
        S_Nombre: secondName,
        P_Apellido: firstApellido,
        S_Apellido: secondApellido,
        Genero: 'NA',
        key_Usuario: hashedPassword, // Almacenar la contraseña encriptada
        Mail: Correo,
        Celular,
        F_Nacimiento,
        Activo: 'no',
        Validar_usuario: code,
        F_Ingreso_Usuario: today
      });

      console.log("Datos guardados correctamente ")// + JSON.stringify({ Usuario: Usuario_Creado, save: "yes" }));
      
      // Enviar correo de verificación
      await transporter.sendMail({
        from: "Forgot password 👻 " + MAIL_CLUB,
        to: Correo,
        subject: "Forgot password ✔",
        html: `
          <b>Codigo de verificacion de, Club Atleticos</b>
          <h1>${code}</h1>
        `,
      });

      return res.status(200).json({ Usuario: Correo, save: "yes" });
    }

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registrar_usuario,
};
