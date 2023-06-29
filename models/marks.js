module.exports = (sequelize, DataTypes) => {
  const marks = sequelize.define("marks", {
    e_id: {
      type: DataTypes.STRING,
      references: {
        model: "exams",
        key: "e_id",
      },
    },
    s_id: {
      type: DataTypes.STRING,
      references: {
        model: "students",
        key: "s_id",
      },
    },
    subject_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "subjects",
        key: "subject_id",
      },
    },
    score: {
      type: DataTypes.STRING,
    },
  });

  return marks;
};
