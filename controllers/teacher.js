const db = require("../models/database");
const id = require("shortid");
class Teacher {
  static async createTeacher(db, obj) {
    try {
      const t_id = id.generate();
      obj.t_id = t_id;
      const newTeacher = await db.teacher.create(obj);
      return newTeacher;
    } catch (error) {
      console.error("Error creating Teacher:", error);
      throw error;
    }
  }

  static async updateTeacher(db, t_id, updatedData) {
    try {
      const [updatedCount, updatedTeachers] = await db.teacher.update(
        updatedData,
        {
          where: { t_id: t_id },
        }
      );

      if (updatedCount > 0) {
        return true;
      } else {
        throw new Error(`Teacher with teacher_id ${t_id} not found.`);
      }
    } catch (error) {
      console.error("Error updating teacher:", error);
      throw error;
    }
  }

  static async deleteTeacher(db, t_id) {
    try {
      const deletedCount = await db.teacher.destroy({
        where: { t_id: t_id },
      });

      if (deletedCount > 0) {
        return `Teacher with t_id ${t_id} has been deleted.`;
      } else {
        throw new Error(`Teacher with t_id ${t_id} not found.`);
      }
    } catch (error) {
      console.error("Error deleting teacher:", error);
      throw error;
    }
  }

  static async viewTeacher() {
    try {
      const allTeachers = await db.teacher.findAll();
      return allTeachers;
    } catch (error) {
      console.error("Error fetching all teachers:", error);
      throw error;
    }
  }

  static async Teacherclass(t_id) {
    try {
      const subTeachers = await db.Sequelize.query(
        'SELECT subjects.subject_name,sections.section_name,sections.section_id FROM sections,subjects,subjectstaffs Where subjectstaffs.teacher_id= ? AND subjectstaffs.subject_id=subjects.subject_id AND sections.section_id=subjectstaffs.section_id ;'
      ,{replacements:[t_id]});
      const secTeachers = await db.Sequelize.query(
        'SELECT section_name,section_id FROM sections Where t_id=?;'
      ,{replacements:[t_id]});
      return {subjectTeacher:subTeachers[0],classTeacher:secTeachers[0]};
    } catch (error) {
      console.error("Error fetching all teachers:", error);
      throw error;
    }
  }
}
module.exports = Teacher;

/*
console.log(Teacher.deleteTeacher(db,3));



console.log(Teacher.updateTeacher(db,3,{
    
    "t_name":"HOD",
    "phone_no":"5456687899",
    "qualification":"M.E. CS",
    "gender":"Female",
    "img":"",
    "designation":"",
    "bank_ac_detail":"",
    "address":"Chennai",
    "salary":"52000"

})) 


console.log(Teacher.createTeacher(db,{
 "t_name":"rajalak",
"phone_no":"5456687899",
"qualification":"M.E. CS",
"gender":"Female",
"img":"",
"designation":"",
"bank_ac_detail":"",
"address":"Chennai",
"salary":"52000"}))
*/
