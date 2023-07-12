const section = require("./section");

module.exports = (sequelize, DataTypes) => {
  const exams = sequelize.define("exams", {
    e_name: {
      type: DataTypes.STRING,
    },
    admin_id: {
      type: DataTypes.STRING,
      references: {
        model: "admins",
        key: "admin_id",
      },
    },
    e_id: {
      type: DataTypes.STRING,
      primaryKey: true,
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
