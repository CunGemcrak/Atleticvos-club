const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Equipo', {
    Id_Equipo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Nombre_Equipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Representante: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    F_Creacion_Equipo: {
        type: DataTypes.DATE,
        allowNull: false,
    }
  });
};
