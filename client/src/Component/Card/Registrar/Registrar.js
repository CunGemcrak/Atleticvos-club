import './Registrar.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Reducer
import { Registrar_User } from '../../../Redux/actions';

// Imágenes
import saludobeisbol from '../../img/Card/icono/saludobeisbol.png';
import ver from '../../img/iconos/iconos/ojo-con-pestanas-black.png';
import ojo from '../../img/iconos/iconos/cerrar-ojo-black.png';

// Validar datos
import validation from './Validation_Registrer';

const Registrar = ({ setView }) => {
    const dispatch = useDispatch();
    const Registro = useSelector((state) => state.Registrado);
    const [keyver, setKeyver] = useState(false);
    const [errors, setErrors] = useState({});
    const [userDataregistre, setuserDataregistre] = useState({
        name: '',
        Papellido: '',
        Celular: '',
        Correo: '',
        Rcorreo: '',
        key: '',
        Rkey: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        // Si el campo es "Celular", permitir solo números
        if (name === 'Celular' && !/^\d*$/.test(value)) {
            return; // Si no es un número, no actualices el estado
        }
        setuserDataregistre({
            ...userDataregistre,
            [name]: value
        });
        setErrors(validation({
            ...userDataregistre,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validation(userDataregistre);
        setErrors(validationErrors);

        if (!userDataregistre.name || !userDataregistre.Papellido || !userDataregistre.Celular || !userDataregistre.Correo || !userDataregistre.Rcorreo || !userDataregistre.key || !userDataregistre.Rkey) {
            alert('Los campos no pueden estar vacíos');
        } else if (Object.keys(validationErrors).length === 0) {
            const datos = {
                name: userDataregistre.name,
                Papellido: userDataregistre.Papellido,
                Celular: userDataregistre.Celular,
                Correo: userDataregistre.Correo,
                key: userDataregistre.key
            };
            dispatch(Registrar_User(datos));
          
           /*if(userData.save==='yes'){
                    alert('Guardado Satisfactoriamente señor' + userData.P_Nombre)
             }*/
        } else {
            alert('Existen errores en el formulario');
        }
    };

    useEffect(() => {
        if (Registro && Registro.save) {
            if (Registro.save === "yes") {
                alert("Datos Guardados satisfactoriamente");
                alert("Hola! " + Registro.Usuario.P_Nombre);
                setuserDataregistre({
                    name: '',
                    Papellido: '',
                    Celular: '',
                    Correo: '',
                    Rcorreo: '',
                    key: '',
                    Rkey: ''
                });
                setView('verificar')
            } else {
                alert("Error al almacenar el usuario");
            }
        }
    }, [Registro, setView])

    const handlever = () => {
        setKeyver(!keyver);
    };

    return (
        <div className="contenedor_Card_Registrar">
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Atleticos</h1>
                    <div>
                        <h4>¡Hola! <img src={saludobeisbol} alt="Saludo" /> Es un gusto ayudarte a recuperar tu cuenta ahora ingresa tu usuario</h4>
                        <div className='contenedor_General_Pass'>
                            <div className='Grupo_pass_registrar'>
                                <input type="text"
                                    name="name"
                                    value={userDataregistre.name}
                                    onChange={handleChange}
                                    maxLength={120}
                                    placeholder="Nombres"
                                    title='No puede ser mayor a 120 caracteres' />
                            </div>
                            <div className='Grupo_pass_registrar'>
                                <input type="text"
                                    name="Papellido"
                                    value={userDataregistre.Papellido}
                                    onChange={handleChange}
                                    maxLength={120}
                                    placeholder="Apellido"
                                    title='No puede ser mayor a 120 caracteres' />
                            </div>
                            <div className='Grupo_pass_registrar'>
                                <input type="text"
                                    name="Celular"
                                    value={userDataregistre.Celular}
                                    onChange={handleChange}
                                    maxLength={10}
                                    placeholder="Celular"
                                    title='Solo se aceptan 10 números' />
                            </div>
                            <div className='Grupo_pass_registrar'>
                                <input type="text"
                                    name="Correo"
                                    value={userDataregistre.Correo}
                                    onChange={handleChange}
                                    maxLength={120}
                                    placeholder="Correo"
                                    title='No puede ser mayor a 120 caracteres' />
                            </div>
                            <div className='Grupo_pass_registrar'>
                                <input type="text"
                                    name="Rcorreo"
                                    value={userDataregistre.Rcorreo}
                                    onChange={handleChange}
                                    maxLength={120}
                                    placeholder="Confirma tu correo"
                                    title='No puede ser mayor a 120 caracteres' />
                            </div>
                            <div className='Grupo_pass_registrar'>
                                <input type={keyver ? 'text' : 'password'}
                                    name="key"
                                    value={userDataregistre.key}
                                    onChange={handleChange}
                                    maxLength={10}
                                    placeholder="Password"
                                    title='No puede ser mayor a 10 caracteres' />
                                <img src={keyver ? ver : ojo} alt='Mostrar/Ocultar' onClick={handlever} />
                            </div>
                            <div className='Grupo_pass_registrar'>
                                <input type={keyver ? 'text' : 'password'}
                                    name="Rkey"
                                    value={userDataregistre.Rkey}
                                    onChange={handleChange}
                                    maxLength={10}
                                    placeholder="Confirmar Password"
                                    title='No puede ser mayor a 10 caracteres' />
                            </div>
                        </div>
                        <div className='errores_input'>
                            {
                                errors.name ? <div className='error'>*{errors.name}</div> :
                                    errors.Papellido ? <div className='error'>*{errors.Papellido}</div> :
                                        errors.Celular ? <div className='error'>*{errors.Celular}</div> :
                                            errors.Correo ? <div className='error'>*{errors.Correo}</div> :
                                                errors.Rcorreo ? <div className='error'>*{errors.Rcorreo}</div> :
                                                    errors.key ? <div className='error'>*{errors.key}</div> :
                                                        errors.Rkey ? <div className='error'>*{errors.Rkey}</div> : null
                            }
                        </div>
                        <div  className="btn" onClick={handleSubmit}>Ingresar</div>
                    </div>
                    <div className="Olvidaste" onClick={() => setView('login')}>
                        Ingresar
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Registrar;
