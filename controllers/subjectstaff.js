
const db = require('../models/database'); 

class SubjectStaff {
    
  
    
    static async createSubjectStaff(db, obj) {
        try {
           
             
            const newSubjectStaff = await db.subjectstaff.create(obj);
            return newSubjectStaff;
        } catch (error) {
            console.error('Error creating SubjectStaff:', error);
            throw error;
        }
    }

    static async updateSubjectStaff(db, id, updatedData) {
        try {
            const [updatedCount, updatedSubjectStaffs] = await db.subjectstaff.update(updatedData, {
                where: { id: id }
            });

            if (updatedCount > 0) {
                return true;
            } else {
                throw new Error(`SubjectStaff with id ${id} not found.`);
            }
        } catch (error) {
            console.error('Error updating SubjectStaff:', error);
            throw error;
        }
    }
        
    static async deleteSubjectStaff(db, id) {
        try {
            const deletedCount = await db.subjectstaff.destroy({
                where: { id: id }
            });

            if (deletedCount > 0) {
                return `SubjectStaff with id ${id} has been deleted.`;
            } else {
                throw new Error(`SubjectStaff with id ${id} not found.`);
            }
        } catch (error) {
            console.error('Error deleting SubjectStaff:', error);
            throw error;
        }
    }
}
module.exports = SubjectStaff;

/*
console.log(SubjectStaff.createSubjectStaff(db,{
    "id":"1",
    "subject_id":"2",
    "teacher_id":"1",
    "section_id":"1"
}))

console.log(SubjectStaff.updateSubjectStaff(db,1,{
    "id":"2",
    "subject_id":"2",
    "teacher_id":"1",
    "section_id":"1"
}))
*/

// console.log(SubjectStaff.deleteSubjectStaff(db,2))