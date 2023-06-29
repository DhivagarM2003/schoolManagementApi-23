module.exports = (sequelize, DataTypes) => {
  const subject = sequelize.define("subject", {
    subject_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    subject_name: {
      type: DataTypes.STRING,
    },
    t_id: {
      type: DataTypes.STRING,
      references: {
        model: "teachers",
        key: "t_id",
      },
    },
    e_id: {
      type: DataTypes.STRING,
      references: {
        model: "exams",
        key: "e_id",
      },
    },
  });
  return subject;
};
