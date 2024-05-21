const validation = (userDataolvidar) => {
    const errors = {};
  
    const registro = userDataolvidar.registro.trim();
  
    if (registro.length === 0) {
      errors.registro = 'El campo no debe estar vacío';
    } else {
      // Validar si es un número de celular (10 dígitos)
      const isCelular = /^\d{10}$/.test(registro);
  
      // Validar si es un correo electrónico
      const isCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registro);
  
      if (!isCelular && !isCorreo) {
        errors.registro = 'Debe ser un número de celular válido o un correo electrónico válido';
      }
    }
  
    return errors;
  };
  
  export default validation;
  