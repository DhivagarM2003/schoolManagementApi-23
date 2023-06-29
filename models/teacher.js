module.exports = (sequelize, DataType) => {
  const teacher = sequelize.define("teacher", {
    t_name: {
      type: DataType.STRING,
    },
    t_id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    admin_id: {
      type: DataType.STRING,
      references: {
        model: "admins",
        key: "admin_id",
      },
    },
    phone_no: {
      type: DataType.STRING,
    },
    qualification: {
      type: DataType.STRING,
    },
    gender: {
      type: DataType.STRING,
    },
    img: {
      type: DataType.STRING,
    },
    designation: {
      type: DataType.STRING,
    },
    bank_ac_detail: {
      type: DataType.STRING,
    },
    address: {
      type: DataType.STRING,
    },
    salary: {
      type: DataType.INTEGER,
    },
  });
  return teacher;
};
