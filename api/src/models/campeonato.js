const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Campeonato', {
    Id_Campeonato: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Nombre_Campeonato: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Representante: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    F_Creacion_Campeonato: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    F_Inicio_Campeonato: {
        type: DataTypes.DATE,
        allowNull: false,
    }
  });
};
