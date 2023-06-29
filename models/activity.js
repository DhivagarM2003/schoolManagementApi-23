module.exports = (sequelize, DataTypes) => {
  const activity = sequelize.define("activity", {
    a_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    t_id: {
      type: DataTypes.STRING,
      references: {
        model: "teachers",
        key: "t_id",
      },
    },
    s_id: {
      type: DataTypes.STRING,
      references: {
        model: "students",
        key: "s_id",
      },
    },
    section_id: {
      type: DataTypes.STRING,
      references: {
        model: "sections",
        key: "section_id",
      },
    },
    content: {
      type: DataTypes.STRING,
    },
  });

  return activity;
};
