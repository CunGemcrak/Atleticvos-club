const { Usuario } = require('../../../db.js')
const { Op } = require('sequelize');
//const axios = require('axios')
//const {URL, APPI_KEY} = process.env;

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
            return res.status(400).json({ message: 'El nombre del Usuario ya existe.' });
            }else{
                console.log("Se puede almacenar");
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
            F_Ingreso_Usuario:today
        })

        console.log("Datos guardados correctamente");
        return res.status(200).json({Usuario_Creado})
    }

} catch (error) {
        console.error(error)
        return res.status(500).json({message: error.message})
    }
}

module.exports = {
    registrar_usuario,
}
