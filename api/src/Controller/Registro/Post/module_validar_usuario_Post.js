const { Usuario } = require('../../../db.js');
const { Op } = require('sequelize');
//const imagen = require('../img/mail/atletricos_loadingt.png')
//const nodemailer = require('nodemailer');
//const bcrypt = require('bcryptjs'); // Importa bcryptjs
const { transporter } = require('../Config_mail/mailer.js');
const { MAIL_CLUB } = process.env;

const validar_usuario = async (req, res) => {
    try {
      const { Correo, code } = req.body;
      
      const usuario = await Usuario.findOne({ where: { Mail: Correo, Validar_usuario: code } });
  
      if (!usuario) {
        return res.status(400).json({ message: 'Código de verificación incorrecto o correo no encontrado' });
      }
      








      usuario.Activo = 'yes';
      usuario.Validar_usuario = 'null'; // Clear the verification code
      await usuario.save();
      

    // Enviar correo de verificación
    await transporter.sendMail({
        from: "Verification Code 👻 " + MAIL_CLUB,
        to: Correo,
        subject: "Verification Code ✔",
        html: `
        <b>Verification Code for Club Atleticos</b>
        <p>Please use the following code to verify your account:</p>
        <h1>${code}</h1>
        <p>If you did not request this, please ignore this email.</p>
        <br/>
        <b>Welcome to Club Atléticos!</b>
        
        <p>Your account has been successfully verified. You are now part of our community. Enjoy your experience!</p>

        `
    });






      return res.status(200).json({ message: 'Usuario verificado con éxito' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  };
  module.exports = {
    validar_usuario,
  };