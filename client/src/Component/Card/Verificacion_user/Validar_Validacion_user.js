const validation = (userDataregistre) => {
    const errors = {};

    // Verificar si userDataregistre está definido y es un objeto
    if (!userDataregistre || typeof userDataregistre !== 'object') {
        return errors; // Retorna un objeto de errores vacío si userDataregistre no está definido o no es un objeto
    }

    // Verificar si el nombre está vacío
    if (userDataregistre.code && userDataregistre.code.trim().length === 0) {
        errors.code = 'Digite el code correcto';
    } 
    
    return errors;
};

export default validation;