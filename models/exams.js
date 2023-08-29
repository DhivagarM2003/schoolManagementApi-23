const section = require("./section");

module.exports = (sequelize, DataTypes) => {
  const exams = sequelize.define("exams", {
    e_name: {
      type: DataTypes.STRING,
    },
    
    
    e_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement : true,
    },
    standard: {
      type: DataTypes.STRING,
      
    },
    subjects: {
      type: DataTypes.STRING,
    },
    e_date: {
      type: DataTypes.DATE,
    },
  });

  return exams;
};
