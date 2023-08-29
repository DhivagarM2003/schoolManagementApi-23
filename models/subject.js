module.exports = (sequelize, DataTypes) => {
  const subject = sequelize.define("subject", {
    subject_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    subject_name: {
      type: DataTypes.STRING,
    },
    standard_name: {
      type: DataTypes.STRING,
      references: {
        model: "standards",
        key: "standard_name",
      },
      
    },
   
   
    
  });
  return subject;
};
