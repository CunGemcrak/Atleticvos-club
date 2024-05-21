const { Usuario } = require('../../../db.js')
const { Op } = require('sequelize');


const login = async (req, res)=>{
try {
    const { Mail, Celular, Nit_Name, key_Usuario} = req.query;
    const usuarioExistente = await Usuario.findOne({ 
        where: { 
            [Op.or]: [
                { Mail },
                { Celular },
                { Nit_Name}
            ],
            key_Usuario // Comprueba también la contraseña
        }
    });
    //console.log("Datos guardados correctamente");
    if (usuarioExistente) {
        // Usuario encontrado, envía los datos completos del usuario
        console.log("datos enviados correctametne: "+JSON.stringify( usuarioExistente ));
        return res.status(200).json({ usuario: usuarioExistente });
    } else {
        // Usuario no encontrado
        return res.status(400).json({ message: 'Credenciales inválidas' });
    }

} catch (error) {
    console.error(error)
    return res.status(500).json({message: error.message})
}
}
module.exports = {login}