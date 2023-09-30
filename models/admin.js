module.exports = (sequelize, DataType) => {
  const admin = sequelize.define("admin", {
    institute_name: {
      type: DataType.STRING,
    },
    admin_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement : true,
    },
    phone_no: {
      type: DataType.STRING,
    },
    current_plan: {
      type: DataType.STRING,
    },
    plan_expire: {
      type: DataType.DATE,
    },
  });
  return admin;
};
