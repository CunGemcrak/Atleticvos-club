//import './Loading.css'
//import {Link} from 'react-router-dom'
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'; 

import './Loading.css'
import loading from '../img/Loading/Ultimo_si.gif'
import atleticos_loading from '../img/Loading/atletricos_loadingt.png'
const Loading = ()=>{
    const history = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
          history('/login'); // Redireccionar al componente Login después de 15 segundos
        }, 5000); // 15 segundos en milisegundos
    
        return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonte
      }, [history]);
    return (
        <div className="body_loading">
        <img  src={atleticos_loading} alt="Atleticos loading" className="Atleticos_Loading"/>
        <img  src={loading} alt="Cargando" className="cargando"/>
       
        {//<Link to='/home'><div className='botones'>home page...</div></Link>
        }
        
        </div>
    )
}

export default Loading;