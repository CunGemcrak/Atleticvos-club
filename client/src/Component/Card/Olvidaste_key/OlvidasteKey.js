import './Olvidastekey.css'
import saludobeisbol from '../../img/Card/icono/saludobeisbol.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import validation from './Validar_Olvidastekey' // Importar la función de validación

import { Olvidaste_User } from '../../../Redux/actions'



const Olvidastekey = ({ setView }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [userDataolvidar, setuserDataolvidar] = useState({
    registro: '',
  });

  const handlChange = (event) => {
    const { name, value } = event.target;
    
    setuserDataolvidar({
      ...userDataolvidar,
      [name]: value
    });
    setErrors(validation({
      ...userDataolvidar,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    // Implementar la lógica de submit aquí
    // Por ejemplo, dispatch(Olvidar_User(userDataolvidar));

    event.preventDefault();
    const validationErrors = validation(userDataolvidar);
    setErrors(validationErrors);

    if (!userDataolvidar.registro) {
        alert('Los campos no pueden estar vacíos');
    } else if (Object.keys(validationErrors).length === 0) {
        alert('Formulario enviado con éxito');
        dispatch(Olvidaste_User(userDataolvidar))
        // Aquí puedes realizar la lógica para enviar el formulario
    } else {
        alert('Existen errores en el formulario');
    }
   // dispatch()
  };

  return (
    <div className="contenedor_Card_loading">
      <form action="">
        <div>
          <h1>Atleticos </h1>
          <div>
            <h4>¡Hola! <img src={saludobeisbol} alt="Saludo" /> Es un gusto ayudarte a recuperar tu cuenta ahora ingresa tu usuario</h4>
            <div className='Grupo_pass_olvidar'>
              <input
                type="text"
                name="registro"
                value={userDataolvidar.registro}
                onChange={handlChange}
                maxLength={120}
                placeholder="Celular/Correo"
                title='No Puede ser mayor a 120 caracteres'
              />
             
            </div>
            <div className='errores_input'>
            {errors.registro && <div className='error'>*{errors.registro}</div>}
            </div>
            <div className="btn" onClick={handleSubmit}>Ingresar</div>
          </div>
          <div className="Olvidaste" onClick={() => setView('login')}>
            Regresar
          </div>
        </div>
      </form>
    </div>
  );
};

export default Olvidastekey;
