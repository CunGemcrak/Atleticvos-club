const { Usuario } = require('../../../db.js');
const { Op } = require('sequelize');
const Twilio = require('twilio');
const {
    id_cuenta_twilio, Token_Autenticar_twilio,
  } = process.env;

const recuperar_Usuario = async (req, res) => {
  try {
    const { Mail, Celular, Nit_Name } = req.query;
    const usuarioExistente = await Usuario.findOne({ 
      where: { 
        [Op.or]: [
          { Mail },
          { Celular },
          { Nit_Name }
        ]
      }
    });

    if (usuarioExistente) {
      // Usuario encontrado, envía los datos completos del usuario
      console.log("datos enviados correctametne: " + JSON.stringify(usuarioExistente));
      const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let codigo = '';
      for (let i = 0; i < 8; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres.charAt(indiceAleatorio);
      } 
      const twilio = new Twilio(id_cuenta_twilio, Token_Autenticar_twilio);
      twilio.messages.create({
        to: '+57' + usuarioExistente.Celular,
        from: '+12096534732',
        body: 'Hola desde Atleticos!' + '\n Tu coduigo es: '+codigo,
      })
      .then(message => console.log(message.sid))
      .catch(error => console.error(error));

      return res.status(200).json({ datos_usuario: usuarioExistente });
    } else {
      // Usuario no encontrado
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { recuperar_Usuario };