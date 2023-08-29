module.exports = (sequelize, DataType) => {
    const subjectstaff = sequelize.define("subjectstaff", {
      
      
        subject_id: {
        type: DataType.INTEGER,
        references: {
            model: "subjects",
            key: "subject_id",
          },
      },
      teacher_id: {
        type: DataType.INTEGER,
        references: {
            model: "teachers",
            key: "t_id",
          },
        
      },
      section_id: {
        type: DataType.INTEGER,
        references: {
            model: "sections",
            key: "section_id",
          },
        
      },
    
    });
    return subjectstaff;
  };
  