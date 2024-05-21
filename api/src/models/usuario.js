const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Usuario', {
    Id_Usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    P_Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    S_Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    P_Apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    S_Apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    Genero: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    key_Usuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Mail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Celular: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      F_Nacimiento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    F_Ingreso_Usuario: {
        type: DataTypes.DATE,
        allowNull: false,
    }
  });
};
