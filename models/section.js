module.exports = (sequelize, DataTypes) => {
  const section = sequelize.define("section", {
    section_name: {
      type: DataTypes.STRING,
    },
    section_id: {
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
    standard: {
      type: DataTypes.STRING,
      
    },
  });

  return section;
};
