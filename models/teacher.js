module.exports = (sequelize, DataTypes) => {
  const teacher = sequelize.define("teacher", {
    t_name: {
      type: DataTypes.STRING,
    },
    t_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      
      
    },
   
    
    phone_no: {
      type: DataTypes.STRING,
    },
    qualification: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
    designation: {
      type: DataTypes.STRING,
    },
    bank_ac_detail: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    salary: {
      type: DataTypes.INTEGER,
    },
  });
  return teacher;
};
