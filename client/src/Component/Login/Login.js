import './Login.css';
import { useState, useEffect } from 'react'; // Importar useEffect

import CardLogin from '../Card/Login/Card_Login';
import OlvidasteKey from '../Card/Olvidaste_key/OlvidasteKey';
import Registrar from '../Card/Registrar/Registrar';

import Atleticos_Escudo from '../img/Card/icono/escudo_atleticos23.png';
import VerificarUser from '../Card/Verificacion_user/Verificacion_user';

const Login = () => {
    const [logueo, setLogueo] = useState(localStorage.getItem('pagina_atleticos') || 'login'); // Recuperar el estado inicial de localStorage
   

    useEffect(() => {
        localStorage.setItem('pagina_atleticos', logueo); // Guardar el estado en localStorage cuando cambie
    }, [logueo]);

    return (
        <div className="contenedor_Login">
            <div className='container_interno'>
                <div className="loading_izquierda">
                    <img src={Atleticos_Escudo} alt="escudo" className="Escudo"/>
                </div>
                <div className="loading_derecha">
                    {logueo === 'login' && <CardLogin setView={setLogueo} />}
                    {logueo === 'olvidar' && <OlvidasteKey setView={setLogueo} />}
                    {logueo === 'registrar' && <Registrar setView={setLogueo}/>}
                    {logueo === 'verificar' && <VerificarUser setView={setLogueo}/>}
                        
                </div>
            </div>
        </div>
    );
}

export default Login;
