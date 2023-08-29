
const db = require('../models/database'); 

class Exam {
    
  
    
    static async createExam(db, obj) {
        try {
           
             
            const newExam = await db.exams.create(obj);
            return newExam;
        } catch (error) {
            console.error('Error creating Exam:', error);
            throw error;
        }
    }

    static async updateExam(db, e_id, updatedData) {
        try {
            const [updatedCount, updatedExams] = await db.exams.update(updatedData, {
                where: { e_id: e_id }
            });

            if (updatedCount > 0) {
                return updatedExams;
            } else {
                throw new Error(`Exam with e_id ${e_id} not found.`);
            }
        } catch (error) {
            console.error('Error updating Exam:', error);
            throw error;
        }
    }
        
    static async deleteExam(db, e_id) {
        try {
            const deletedCount = await db.exams.destroy({
                where: { e_id: e_id }
            });

            if (deletedCount > 0) {
                return `Exam with e_id ${e_id} has been deleted.`;
            } else {
                throw new Error(`Exam with e_id ${e_id} not found.`);
            }
        } catch (error) {
            console.error('Error deleting Exam:', error);
            throw error;
        }
    }
}
module.exports = Exam;
/*
console.log(Exam.createExam(db,{
    
    "e_name":"Mid-term",
    "standard":"12th",
    "subjects":"Maths",
    "e_date":"2018-05-12 00:00:00"

}))
*/