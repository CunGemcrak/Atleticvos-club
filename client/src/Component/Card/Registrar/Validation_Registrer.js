const validation = (userDataregistre) => {
    const errors = {};

    // Verificar si userDataregistre está definido y es un objeto
    if (!userDataregistre || typeof userDataregistre !== 'object') {
        return errors; // Retorna un objeto de errores vacío si userDataregistre no está definido o no es un objeto
    }

    // Verificar si el nombre está vacío
    if (userDataregistre.name && userDataregistre.name.trim().length === 0) {
        errors.name = 'El nombre no debe estar vacío';
    } 
    // Verificar la longitud del nombre
    else if (userDataregistre.name && (userDataregistre.name.trim().length < 3 || userDataregistre.name.trim().length > 40)) {
        errors.name = 'El nombre debe ser mayor a 3 caracteres';
    } 

    // Verificar si el apellido está vacío
    if (userDataregistre.Papellido && userDataregistre.Papellido.trim().length === 0) {
        errors.Papellido = 'El apellido no debe estar vacío';
    } 
    // Verificar la longitud del apellido
    else if (userDataregistre.Papellido && (userDataregistre.Papellido.trim().length < 4 || userDataregistre.Papellido.trim().length > 40)) {
        errors.Papellido = 'El apellido debe ser mayor a 3 caracteres';
    }

    // Verificar si el celular está vacío y si es un número válido
    if (userDataregistre.Celular) {
        const celularTrimmed = userDataregistre.Celular.trim();

        if (celularTrimmed.length === 0) {
            errors.Celular = 'El Celular no debe estar vacío';
        } 
        else if (celularTrimmed.length !== 10 || !/^\d{10}$/.test(celularTrimmed)) {
            errors.Celular = 'Esto no es un número de celular válido';
        }
    }

    // Verificar si el correo está vacío y si es un correo válido
    if (userDataregistre.Correo) {
        const correoTrimmed = userDataregistre.Correo.trim();

        if (correoTrimmed.length === 0) {
            errors.Correo = 'El correo no debe estar vacío';
        } 
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoTrimmed)) {
            errors.Correo = 'Esto no es un correo válido';
        }
    }

    // Verificar si la confirmación del correo está vacía y si coincide con el correo
    if (userDataregistre.Rcorreo) {
        const rcorreoTrimmed = userDataregistre.Rcorreo.trim();

        if (rcorreoTrimmed.length === 0) {
            errors.Rcorreo = 'La confirmación del correo no debe estar vacía';
        } 
        else if (userDataregistre.Correo && rcorreoTrimmed !== userDataregistre.Correo.trim()) {
            errors.Rcorreo = 'El correo y la confirmación del correo no coinciden';
        }
    }

    // Verificar si la contraseña está vacía y si cumple con los criterios
    if (userDataregistre.key && userDataregistre.key.trim().length === 0) {
        errors.key = 'La contraseña no debe estar vacía';
    } 
    else if (userDataregistre.key) {
        const minLength = 6;
        const hasUpperCase = /[A-Z]/.test(userDataregistre.key);
        const hasLowerCase = /[a-z]/.test(userDataregistre.key);
        const hasNumber = /\d/.test(userDataregistre.key);
        const hasSpecialChar = /[@$!%*?&]/.test(userDataregistre.key);

        if (userDataregistre.key.length < minLength) {
            errors.key = 'La contraseña debe tener 8 caracteres';
        } else if (!hasUpperCase) {
            errors.key = 'La contraseña debe contener al menos una letra mayúscula';
        } else if (!hasLowerCase) {
            errors.key = 'La contraseña debe contener al menos una letra minúscula';
        } else if (!hasNumber) {
            errors.key = 'La contraseña debe contener al menos un número';
        } else if (!hasSpecialChar) {
            errors.key = 'La contraseña debe contener al menos un carácter especial (@, $, !, %, *, ?, &)';
        }
    }

    // Verificar si la confirmación de la contraseña está vacía y si coincide con la contraseña
    if (userDataregistre.Rkey) {
        const rkeyTrimmed = userDataregistre.Rkey.trim();

        if (rkeyTrimmed.length === 0) {
            errors.Rkey = 'La confirmación de la contraseña no debe estar vacía';
        } 
        else if (userDataregistre.key && rkeyTrimmed !== userDataregistre.key.trim()) {
            errors.Rkey = 'La contraseña y la confirmación de la contraseña no coinciden';
        }
    }

    return errors;
};

export default validation;
