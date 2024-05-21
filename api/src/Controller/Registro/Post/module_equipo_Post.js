const { Equipo } = require('../../../db.js')
const { Op } = require('sequelize');
//const axios = require('axios')
//const {URL, APPI_KEY} = process.env;

const registrar_equipo = async (req, res)=>{

try {
    const { Nombre_Equipo, Representante, F_Creacion_Equipo } = req.body
    console.log('body es' + JSON.stringify(req.body));
    const consular_usuario = await Equipo.findOne( {//usuario.findOne({ 
        where: { 
            [Op.or]: [
                { Nombre_Equipo },
            ]

     } 
    });
      console.log("consulto el Dogs");
     if (consular_usuario) {
        console.log("El Usuario ya existe");
            return res.status(400).json({ message: 'El nombre del Cachorro ya existe.' });
            }else{
                console.log("Se puede almacenar");
        const Usuario_Creado = await Equipo.create({
            Nombre_Equipo, 
            Representante, 
            F_Creacion_Equipo
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
    registrar_equipo,
}
