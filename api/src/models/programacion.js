const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Programacion', {
    Id_Programacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Fecha_Publicacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Fecha_Programacionn: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    Foranikey_Partidos: {
        type: DataTypes.DATE,
        allowNull: false,
    }
  });
};
