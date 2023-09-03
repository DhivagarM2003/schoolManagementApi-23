const db = require('../models/database'); 

class Teacher {
    

    static async createTeacher(db, obj) {
        try {
           
             
            const newTeacher = await db.teacher.create(obj);
            return newTeacher;
        } catch (error) {
            console.error('Error creating Teacher:', error);
            throw error;
        }
    }

    static async updateTeacher(db, t_id, updatedData) {
        try {
            const [updatedCount, updatedTeachers] = await db.teacher.update(updatedData, {
                where: { t_id: t_id }
            });

            if (updatedCount > 0) {
                return true;
            } else {
                throw new Error(`Teacher with teacher_id ${t_id} not found.`);
            }
        } catch (error) {
            console.error('Error updating teacher:', error);
            throw error;
        }
    }


    static async deleteTeacher(db, t_id) {
        try {
            const deletedCount = await db.teacher.destroy({
                where: { t_id: t_id }
            });

            if (deletedCount > 0) {
                return `Teacher with t_id ${t_id} has been deleted.`;
            } else {
                throw new Error(`Teacher with t_id ${t_id} not found.`);
            }
        } catch (error) {
            console.error('Error deleting teacher:', error);
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