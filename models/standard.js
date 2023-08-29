module.exports = (sequelize, DataTypes) => {
    const standard = sequelize.define("standard", {
      standard_name: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      curriculum: {
        type: DataTypes.STRING,
        
      },
      
    });
    return standard;
  };
  