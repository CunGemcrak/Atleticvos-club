const { Usuario } = require('../../../db.js')
const { Op } = require('sequelize');
const nodemailer = require('nodemailer')
const { transporter } = require('../Config_mail/mailer.js');
//const axios = require('axios')
const {MAIL_CLUB} = process.env;

const registrar_usuario = async (req, res)=>{

try {
    const {name, Papellido, Celular, Correo , key   } = req.body
   
        const nameParts = name.trim().split(' ');
    
        // Si solo hay un nombre, no hay segundo nombre.
        const firstName = nameParts[0] || '';
        const secondName = nameParts.slice(1).join(' ') || ''; // Junta el resto de las partes como segundo nombre.
    
        const splitName = { firstName, secondName };
    

    
        const apellidoParts = Papellido.trim().split(' ');
    
        // Si solo hay un apellido, no hay segundo apellido.
        const firstApellido = apellidoParts[0] || '';
        const secondApellido = apellidoParts.slice(1).join(' ') || ''; // Junta el resto de las partes como segundo apellido.
    
        const splitApellido = { firstApellido, secondApellido };
   

console.log("nombre" + splitName.firstName)
console.log("Snombre" + splitName.secondName)
console.log("Apellido 1" + splitApellido.firstApellido)
console.log("Apellido 2" + splitApellido.secondApellido)
const F_Nacimiento = '00-00-0000'



   
    console.log('body es' + JSON.stringify(req.body));
    const consular_usuario = await Usuario.findOne( {//usuario.findOne({ 
        where: { 
            [Op.or]: [
                { Mail:Correo },
                { Celular }
            ]

     } 
    });
      console.log("consulto el Usuaruio");
     if (consular_usuario) {
        console.log("El Usuario ya existe");
            return res.status(200).json({ message: 'El nombre del Usuario ya existe.' });
            }else{
                console.log("Se puede almacenar");

                 //Carqacteres especiales 

        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const specialChars = '1234567890!@#$%&?';
        let code = '';

        // Generar 5 letras aleatorias
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * letters.length);
            code += letters.charAt(randomIndex);
        }

        // Generar 3 caracteres especiales aleatorios
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * specialChars.length);
            code += specialChars.charAt(randomIndex);
        }

        // Convertir la cadena a un array y mezclarlo aleatoriamente
        const codeArray = code.split('');
        codeArray.sort(() => Math.random() - 0.5);

        // Convertir el array nuevamente a una cadena
        code = codeArray.join('');






        const today = new Date();
        const Usuario_Creado = await Usuario.create({
            P_Nombre:splitName.firstName , 
            S_Nombre: splitName.secondName, 
            P_Apellido: splitApellido.firstApellido, 
            S_Apellido: splitApellido.secondApellido, 
            Genero: 'NA',
            key_Usuario: key, 
            Mail: Correo, 
            Celular, 
            F_Nacimiento, 
            Activo: 'no',
            Validar_usuario: code,
            F_Ingreso_Usuario:today
        })

        
        const userData = {Usuario:Usuario_Creado, save:"yes" }
        console.log("Datos guardados correctamente " + JSON.stringify(userData) );
       


        //Diseño de mail 
        await transporter.sendMail({
            from: "Forgot password 👻 "+MAIL_CLUB, // sender address
            to: Correo, // list of receivers
            subject: "Forgot password ✔", // Subject line
           // text: "Hello world?", // plain text body
            html:  `
            <b>Codigo de verificacion de, Club Atleticos</b>

            <h1> ${code}</h1>

            `, // html body
          });





        return res.status(200).json({Usuario:Usuario_Creado, save:"yes"})
    }

} catch (error) {
        console.error(error)
        return res.status(500).json({message: error.message})
    }
}

module.exports = {
    registrar_usuario,
}
