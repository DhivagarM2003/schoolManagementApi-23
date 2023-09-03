const db = require('../models/database'); 

class Subject {
    
  
    
    static async createSubject(db, obj) {
        try {
           
             
            const newSubject = await db.subject.create(obj);
            return newSubject;
        } catch (error) {
            console.error('Error creating Subject:', error);
            throw error;
        }
    }

    static async updateSubject(db, subject_id, updatedData) {
        try {
            const [updatedCount, updatedSubjects] = await db.subject.update(updatedData, {
                where: { subject_id: subject_id }
            });

            if (updatedCount > 0) {
                return true;
            } else {
                throw new Error(`Subject with subject_id ${subject_id} not found.`);
            }
        } catch (error) {
            console.error('Error updating Subject:', error);
            throw error;
        }
    }
        
    static async deleteSubject(db, subject_id) {
        try {
            const deletedCount = await db.subject.destroy({
                where: { subject_id: subject_id }
            });

            if (deletedCount > 0) {
                return `Subject with subject_id ${subject_id} has been deleted.`;
            } else {
                throw new Error(`Subject with subject_id ${subject_id} not found.`);
            }
        } catch (error) {
            console.error('Error deleting Subject:', error);
            throw error;
        }
    }
}
module.exports=Subject;
/*
console.log(Subject.createSubject(db,{

    "subject_id":"3",
    "subject_name":"Englishhhhhhhh",
    "standard_name":"class 2"

}))

console.log(Subject.updateSubject(db,1,{

    "subject_id":"2",
    "subject_name":"English",
    "standard_name":"class 2"

}))
*/
// console.log(Subject.deleteSubject(db,3))
