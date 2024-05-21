import './Card_Login.css'
import ojo from '../../img/iconos/iconos/cerrar-ojo-black.png'
import saludobeisbol from '../../img/Card/icono/saludobeisbol.png'
import ver from '../../img/iconos/iconos/ojo-con-pestanas-black.png'
import validation from './validar_login.js'

import {useState} from 'react'
const CardLogin =  ({ setView })  => {
    const [keyver,setKeyver] = useState(false);
    const [errors, setErrors] = useState({});
    const [userData, setUserData]=useState({
        name:'',
        pass:'',
    });
    
    const handlever = () =>{
      //  alert("ingreso");
   
            setKeyver(!keyver)
       
        
    }
 
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
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validation(userData);
        setErrors(validationErrors);

        if (!userData.name || !userData.pass) {
            alert('Los campos no pueden estar vacíos');
        } else if (Object.keys(validationErrors).length === 0) {
            alert('Formulario enviado con éxito');
            // Aquí puedes realizar la lógica para enviar el formulario
        } else {
            alert('Existen errores en el formulario');
        }
    };

    return (
                <div className="contenedor_Card_loading">
                    <form action="">
                                <div > 
                                    <h1>Atleticos </h1>
                                    <div> 
                                        <h4>¡Bienvenido Nuevametne! <img src={saludobeisbol} alt="Saludo"/></h4>
                                    
                                        <div className='Grupo_pass'> 
                                        <input type="text" 
                                            name="name" 
                                            value={userData.name}
                                            onChange={handlChange}
                                            maxLength={100}
                                            placeholder="Celular/Correo"
                                            title='No Puede ser mayor a 100 caracteres'/>
                            </div>
                                    
                                
                                    <div className='Grupo_pass'>
                                    <input type={keyver ?  'text': 'password' } 
                                            name="pass" 
                                            value={userData.pass}
                                            onChange={handlChange}
                                            maxLength={15}
                                            placeholder="Password"
                                            title='No Puede ser mayor a 15 caracteres'/>
                                            <img src={keyver ? ver : ojo}alt='Mostrar/Ocultar'  onClick={handlever}/>
                                    </div>
                                    
                            

                                        <div className="Grupo_REgistro">
                                            <div className='checked_Recordar'>
                                                    <input type='checkbox' /><label>Recordar</label>
                                            </div>
                                            <div className="Olvidaste" onClick={() => setView('olvidar')}>
                Olvidaste tu contraseña
              </div>
                                        </div>
                                        <div className='styloerror'>
                                        {
                                                errors.name
                                                ?<p className='error'>* {errors.name} </p>
                                                :errors.pass 
                                                ?<p className='error'>* {errors.pass} </p>
                                                :null
                                            }
                                             
                                        </div>
                                        
                                        <div className="btn" onClick={handleSubmit}>Ingrsar</div>
                                        <div className="Grupo_REgistro">
                                            <div>¿Aún no tienes una cuenta? </div><div className="Olvidaste_registro" onClick={() => setView('registrar')}>
                                                Registrate aquí
                                                </div></div>
                                    
                                    </div>
                        
                            
                                </div>
                        </form> 
                </div>
    )}
export default CardLogin;