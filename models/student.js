module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define("student", {
    s_name: {
      type: DataTypes.STRING,
    },
    s_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      
      
    },
     
    section_id: {
      type: DataTypes.STRING,
      references: {
        model: "sections",
        key: "section_id",
      },
    },
    blood_group: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    father_name: {
      type: DataTypes.STRING,
    },
    emis_no: {
      type: DataTypes.STRING,
    },
    fees: {
      type: DataTypes.INTEGER,
    },
    due: {
      type: DataTypes.INTEGER,
    },
    phone_no_1: {
      type: DataTypes.STRING,
    },
    phone_no_2: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
  });

  return student;
};
