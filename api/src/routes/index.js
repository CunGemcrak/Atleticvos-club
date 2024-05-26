const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const  { registrar_usuario } = require('../Controller/Registro/Post/module_registre_Post')
const {validar_usuario} =require('../Controller/Registro/Post/module_validar_usuario_Post')




const {login} = require('../Controller/Registro/get/module_login_Get')
const {recuperar_Usuario} = require('../Controller/Registro/get/module_recuperar_usuario')


// import Reistrar
const {registrar_equipo} = require('../Controller/Registro/Post/module_equipo_Post')

//Impor Campeonato
const {registrar_campeonato}= require('../Controller/Registro/Post/module_campeonato_Post')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



//Metopdos Usuarios
router.post('/atleticos/register', registrar_usuario)
router.post('/atleticos/verify', validar_usuario)



router.get('/atleticos/recuperarkey', recuperar_Usuario)
router.get('/atleticos/login', login)


//Metopdos equipos
router.post('/atleticos/equipo/registrar', registrar_equipo)

//Metodos Campeonatos
router.post('/atleticos/campeonato/registrar', registrar_campeonato)





module.exports = router;
