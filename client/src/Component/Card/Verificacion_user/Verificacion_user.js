import './Verificacion_user.css'

import saludobeisbol from '../../img/Card/icono/saludobeisbol.png'

import validation from './Validar_Validacion_user.js'

import {useState} from 'react'
const VerificarUser =  ({ setView })  => {
  
    const [errors, setErrors] = useState({});
    const [userData, setUserData]=useState({
        name:'',
        pass:'',
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
                                        <h4>¡Bienvenido Nuevametne! ahora solo revisa tu celular e ingresa el codigo de confirmacion <img src={saludobeisbol} alt="Saludo"/></h4>
                                    
                                        <div className='Grupo_pass'> 
                                        <input type="text" 
                                            name="name" 
                                            value={userData.name}
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
                                           <div className="Olvidaste_registro" onClick={() => setView('login')}>
                                            Regresar 
                                                </div></div>
                                    
                                    </div>
                        
                            
                                </div>
                        </form> 
                </div>
    )}
export default VerificarUser;