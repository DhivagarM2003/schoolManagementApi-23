module.exports = (sequelize, DataTypes) => {
    const calendar = sequelize.define('calendar', {
      date: {
        type: DataTypes.DATEONLY,
        primaryKey: true
        
      },
      event: {
        type: DataTypes.STRING,
        
      },
      status: {
        type: DataTypes.STRING,
        
        validate: {
          isIn: [['0', '1']]
        }
      }
    });
  
    return calendar;
  };
  