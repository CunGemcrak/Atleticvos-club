import './Registrar.css'
import { useState } from 'react'
import {useDispatch} from 'react-redux'


//reducer
import { Registrar_User } from '../../../Redux/actions'

//imagenes
import saludobeisbol from '../../img/Card/icono/saludobeisbol.png'
import ver from '../../img/iconos/iconos/ojo-con-pestanas-black.png'
import ojo from '../../img/iconos/iconos/cerrar-ojo-black.png'


//validar datos
import validation from './Validation_Registrer'





const Registrar = ({setView}) => {
    const dispatch = useDispatch();
    const [keyver,setKeyver] = useState(false);
    const [errors, setErrors] = useState({});
    const [userDataregistre, setuserDataregistre] = useState({
                                                                name:'',
                                                                Papellido:'',
                                                                Celular:'',
                                                                Correo:'',
                                                                Rcorreo:'',
                                                                key:'',
                                                                Rkey:''

                                                                })


    const handlChange = (event) =>{
       
       const { name, value } = event.target;
      // Si el campo es "Celular", permitir solo números
      if (name === 'Celular' && !/^\d*$/.test(value)) {
        return; // Si no es un número, no actualices el estado
    }
      setuserDataregistre({
            ...userDataregistre,
            [event.target.name]:event.target.value
        })
        setErrors(validation({
            ...userDataregistre,
            [event.target.name]:event.target.value
        }))
      

    }
    


    const handleSumit = async(event)=>{

        event.preventDefault();
        const validationErrors = validation(userDataregistre);
        setErrors(validationErrors);

        if (!userDataregistre.name || !userDataregistre.Papellido || !userDataregistre.Celular || !userDataregistre.Correo || !userDataregistre.Rcorreo || !userDataregistre.key || !userDataregistre.Rkey) {
            alert('Los campos no pueden estar vacíos');
        } else if (Object.keys(validationErrors).length === 0) {
            alert('Formulario enviado con éxito');
            const datos = {name:userDataregistre.name, 
                Papellido:userDataregistre.Papellido, 
                Celular:userDataregistre.Celular, 
                Correo: userDataregistre.Correo , 
                key:userDataregistre.key}
            dispatch(Registrar_User(datos))
            // Aquí puedes realizar la lógica para enviar el formulario
        } else {
            alert('Existen errores en el formulario');
        }
        
    }


    const handlever = () =>{
        //  alert("ingreso");
     
              setKeyver(!keyver)
         
          
      }

    return ( <div className="contenedor_Card_Registrar">
    <form action="">
                <div > 
                    <h1>Atleticos </h1>
                    <div> 
                        <h4>¡Hola! <img src={saludobeisbol} alt="Saludo"/> Es un gusto ayudarte a recuperar tu cuenta ahora ingresa tu usuario </h4>
                    <div className='contenedor_General_Pass'>
                        <div className='Grupo_pass_registrar'> 
                        <input type="text" 
                            name="name" 
                            value={userDataregistre.name}
                            onChange={handlChange}
                            maxLength={120}
                            placeholder="Nombres"
                            title='No Puede ser mayor a 120 caracteres'/>
                         </div>

                         
                         <div className='Grupo_pass_registrar'> 
                        <input type="text" 
                            name="Papellido" 
                            value={userDataregistre.Papellido}
                            onChange={handlChange}
                            maxLength={120}
                            placeholder="Apellido"
                            title='No Puede ser mayor a 120 caracteres'/>
                         </div>
                        
                         <div className='Grupo_pass_registrar'> 
                        <input type="text" 
                            name="Celular" 
                            value={userDataregistre.Celular}
                            onChange={handlChange}
                            maxLength={10}
                            placeholder="Celular"
                            title='Solo se aceptan 10 numeros'/>
                         </div>
                         <div className='Grupo_pass_registrar'> 
                        <input type="text" 
                            name="Correo" 
                            value={userDataregistre.Correo}
                            onChange={handlChange}
                            maxLength={120}
                            placeholder="Correo"
                            title='No Puede ser mayor a 120 caracteres'/>
                         </div>
                         <div className='Grupo_pass_registrar'> 
                        <input type="text" 
                            name="Rcorreo" 
                            value={userDataregistre.Rcorreo}
                            onChange={handlChange}
                            maxLength={120}
                            placeholder="Confirma tu correo"
                            title='No Puede ser mayor a 120 caracteres'/>
                         </div>
                         <div className='Grupo_pass_registrar'> 
                        <input type={keyver ?  'text': 'password' } 
                            name="key" 
                            value={userDataregistre.key}
                            onChange={handlChange}
                            maxLength={10}
                            placeholder="Password"
                            title='No Puede ser mayor a 10 caracteres'/>
                             <img src={keyver ? ver : ojo}alt='Mostrar/Ocultar'  onClick={handlever}/>
                         </div>
                         <div className='Grupo_pass_registrar'> 
                        <input type={keyver ?  'text': 'password' } 
                            name="Rkey" 
                            value={userDataregistre.Rkey}
                            onChange={handlChange}
                            maxLength={10}
                            placeholder="Confirmar Pasword"
                            title='No Puede ser mayor a 10 caracteres'/>
                         </div>
                    
                
                  
                    
            
                         </div>
                         <div className='errores_input'>
                            {
                               errors.name 
                               ?<div className='error'>*{errors.name }</div>
                               :errors.Papellido 
                               ?<div className='error'>*{errors.Papellido }</div>
                               :errors.Celular 
                               ?<div className='error'>*{errors.Celular }</div>
                               :errors.Correo 
                               ?<div className='error'>*{errors.Correo }</div>
                               :errors.Rcorreo 
                               ?<div className='error'>*{errors.Rcorreo }</div>
                               :errors.key 
                               ?<div className='error'>*{errors.key }</div>
                               :errors.Rkey 
                               ?<div className='error'>*{errors.Rkey }</div>
                               :null
                            }
                         </div>
                
                        <div className="btn" onClick={handleSumit}>Ingrsar</div>
                        
                    
                        </div>
                        <div className="Olvidaste" onClick={() => setView('login')}>
                Ingresar
              </div>
            
                </div>
        </form> 
</div>)
}
export default Registrar;