import './Verificacion_user.css'
import { useDispatch, useSelector } from 'react-redux';

import saludobeisbol from '../../img/Card/icono/saludobeisbol.png'

import validation from './Validar_Validacion_user.js'

import { Verify_User_Code } from '../../../Redux/actions';

import {useEffect, useState} from 'react'
const VerificarUser =  ({setView})  => {
    const dispatch = useDispatch();
    const Registro = useSelector((state) => state.Registrado);



  
    const [errors, setErrors] = useState({});
   // const navigate = useNavigate();


    const hondlereturn = () =>{
        setView('login')
       // navigate('/login')
        
    }


    const [userData, setUserData]=useState({
        code:''
    });

 
    const handlChange = (event) =>{
       
      //  const { name, value } = event.target;
     
        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]:event.target.value
        }))
      

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validation(userData);
       // setErrors(validationErrors);
       setUserData({
        code: userData.code
    });
    alert('Este es el correo '+Registro.Usuario)
    alert('Este es el Code '+userData.code)
    const datos = {Correo:Registro.Usuario, code:userData.code}
        if (!datos.Correo || !datos.code) {
            alert('Los campos no pueden estar vacíos');
        } else if (Object.keys(validationErrors).length === 0) {
            alert('Formulario enviado con éxito');
            // Aquí puedes realizar la lógica para enviar el formulario
            
          dispatch(Verify_User_Code(datos))
          
          
           

        } else {
            alert('Existen errores en el formulario');
        }
    };

    useEffect(() => {
        if("Verificado" === Registro) {
            setView('login')
        }else
        if("Error" === Registro ){
            alert('Problemas en la cuenta')
        }else{
            alert('Problemas en la base de datos')
        }
    }, [Registro, setView])


    return (
                <div className="contenedor_Card_loading">
                    <form action="">
                                <div > 
                                    <h1>Atleticos </h1>
                                    <div> 
                                        <h4>¡Bienvenido Nuevametne! ahora solo revisa tu celular e ingresa el codigo de confirmacion <img src={saludobeisbol} alt="Saludo"/></h4>
                                    
                                        <div className='Grupo_pass'> 
                                        <input type="text" 
                                            name="code" 
                                            value={userData.code}
                                            onChange={handlChange}
                                            maxLength={100}
                                            placeholder="Confirmar datos"
                                            title='No Puede ser mayor a 100 caracteres'/>
                            </div>

                                    
                                            
                                        <div className='styloerror'>
                                        {
                                                errors.name
                                                ?<p className='error'>* {errors.name} </p>

                                                :null
                                            }
                                             
                                        </div>
                                        
                                        <div className="btn" onClick={handleSubmit}>Ingrsar</div>
                                        <div className="Grupo_REgistro">
                                           <div className="Olvidaste_registro" onClick={hondlereturn}>
                                            Regresar 
                                                </div></div>
                                    
                                    </div>
                        
                            
                                </div>
                        </form> 
                </div>
    )}
export default VerificarUser;