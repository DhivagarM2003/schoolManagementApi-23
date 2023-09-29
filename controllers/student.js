
const db = require('../models/database'); 
const id = require("shortid");
const att = require('./attendance'); 

class Student {
    
  
    
    static async createStudent(db, obj) {
        try {           
            const s_id = id.generate();
           
            obj.s_id = s_id; 
            const newStudent = await db.student.create(obj);
            return newStudent;
        } catch (error) { 
            console.error('Error creating student:', error);
            throw error;
        }
    }

    static async updateStudent(db, s_id, updatedData) {
        try {
            const [updatedCount, updatedStudents] = await db.student.update(updatedData, {
                where: { s_id: s_id }
            });

            if (updatedCount > 0) {
                return true;
            } else {
                throw new Error(`Student with s_id ${s_id} not found.`);
            }
        } catch (error) {
            console.error('Error updating student:', error);
            throw error;
        }
    }
        
    static async deleteStudent(db, s_id) {
        try {
            const deletedCount = await db.student.destroy({
                where: { s_id: s_id }
            });

            if (deletedCount > 0) {
                return `Student with s_id ${s_id} has been deleted.`;
            } else {
                throw new Error(`Student with s_id ${s_id} not found.`);
            }
        } catch (error) {
            console.error('Error deleting student:', error);
            throw error;
        }
    }
}
module.exports = Student;

/*console.log(Student.deleteStudent(db,10002))/*



/*console.log(Student.updateStudent(db,10000,{
    "s_name":"updated ra",
    "blood_group":"B+",
    "address":"Chennai",
    "father_name":"Adnan",
    "emis_no":"4655654789",
    "fees":"20000",
    "due":"12000",
    "phone_no_1":"1254689724",
    "phone_no_2":"4567891235",
    "gender":"Male",
    "img":""}))
*/



/*
console.log(Student.createStudent(db,{
"s_name":"gogil",
"blood_group":"B+",
"address":"Chennai",
"father_name":"Adnan",
"emis_no":"4655654789",
"fees":"20000",
"due":"12000",
"phone_no_1":"1254689724",
"phone_no_2":"4567891235",
"gender":"Male",
"img":""}))*/
