const section = require("./section");

module.exports = (sequelize, DataTypes) => {
  const exams = sequelize.define("exams", {
    e_name: {
      type: DataTypes.STRING,
    },
    e_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    standard_name: {
      type: DataTypes.STRING,
      
    },
    subjects: {
      type: DataTypes.STRING,
    },
    e_date: {
      type: DataTypes.DATE,
    },
    acad_year:{
      type: DataTypes.STRING,
    }
  });

  return exams;
};
