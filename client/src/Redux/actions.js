import { REGISTRAR, RECUPERAKEY } from "./action-types"
import axios from 'axios'


export const Registrar_User = (dataquery)=>{
    return async (dispatch) => {
        try {
            console.log("datos: "+ dataquery)
            const endpoint = 'http://localhost:3001/atleticos/register';
            const response = await axios.post(endpoint, dataquery)
            console.log("El dato de error es: " + response);
            dispatch({
                        type:RECUPERAKEY,
                        payload:response
                 })
        } catch (error) {
            
        }

    }
}



export const Olvidaste_User = (dataquery)=>{
    return async (dispatch) => {
        try {
            const endpoint = 'http://localhost:3001/atleticos/register';
            
            const response = await axios.post(endpoint, dataquery)


            dispatch({
                        type:REGISTRAR,
                        payload:response
                 })
        } catch (error) {
            
        }

    }
}







/*

export const Alldogs = () => {
    return async (dispatch) => {
        try {
            const endpoint = 'http://localhost:3001/dogs';
            const { data } = await axios.get(endpoint);

            let priemrabusqueda = [];

            if (data?.api) {
                data.api.forEach((breeds) => {
                    if (breeds.breeds) {
                        let inf = breeds.breeds.map((elemento) => ({
                            bd:'API',
                            code: breeds.id,
                            id: elemento.id,
                            name: elemento.name,
                            country_code: elemento.country_code,
                            life_span: elemento.life_span,
                            temperament: elemento.temperament,
                            weight: elemento.weight.metric,
                            url: breeds.url,
                        }));
                        priemrabusqueda.push(...inf);
                    }
                });
            }

            if (data?.bd) {
                let infbd = data.bd.map((elemento) => ({
                    bd:'BD',
                    code: elemento.id,
                    id: elemento.id,
                    name: elemento.name,
                    country_code: elemento.country_code,
                    life_span: elemento.life_span,
                    temperament: elemento.temperament,
                    weight: elemento.weight,
                    url: elemento.url,
                }));
                priemrabusqueda.push(...infbd);
            }

            dispatch({
                type: AllDOGS,
                payload: priemrabusqueda,
            });
        } catch (error) {
            console.error("El dato de error es: " + error);
            // Aquí puedes lanzar una acción de error o mostrar un mensaje de error al usuario
        }
    };
};

export const AllTemperamento = ()=>{
    return async (dispatch)=>{
        try {
            const endpoint = 'http://localhost:3001/temperament'
            const {data} = await axios.get(endpoint)
            const {temperamentos} =  data
          //  const priemrabusqueda = []
            console.log("Este es el temperamento "+JSON.stringify(data))

            dispatch({
                type: TEMPERAMENTO,
                payload: temperamentos,
            })
        } catch (error) {
            console.error("El dato de error es: "+error)
        }
    }
}


export const FiltroInput = (dato)=>{
    return async (dispatch) =>{
        dispatch({
        type: FILTROINPUT,
        payload: dato,
    })
}
}

export const OrderAZ = (dato)=>{
    return async (dispatch) =>{
        dispatch({
        type: ORDERAZ,
        payload: dato,
    })
}
}

export const FiltertTemperamento = (dato)=>{
    return async (dispatch) =>{
        dispatch({
        type: FILTROTEMPERAMENTO,
        payload: dato,
    })
}
}

export const Copydog = () =>{
    return async (dispatch) =>{
        dispatch({
        type: COPYDOG,
        payload: '',
    })
}
}

export const SeleccionaBD = (dato)=>{
    return async (dispatch) =>{
        dispatch({
        type: IDBD,
        payload: dato,
    })
}
}
*/