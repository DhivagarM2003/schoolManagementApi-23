
const db = require('../models/database'); 

class Admin {
    
  
    
    static async createAdmin(db, obj) {
        try {
           
             
            const newAdmin = await db.admin.create(obj);
            return newAdmin;
        } catch (error) {
            console.error('Error creating Admin:', error);
            throw error;
        }
    }

    static async updateAdmin(db, admin_id, updatedData) {
        try {
            const [updatedCount, updatedAdmins] = await db.admin.update(updatedData, {
                where: { admin_id: admin_id }
            });

            if (updatedCount > 0) {
                return updatedAdmins;
            } else {
                throw new Error(`Admin with admin_id ${admin_id} not found.`);
            }
        } catch (error) {
            console.error('Error updating Admin:', error);
            throw error;
        }
    }
        
    static async deleteAdmin(db, admin_id) {
        try {
            const deletedCount = await db.admin.destroy({
                where: { admin_id: admin_id }
            });

            if (deletedCount > 0) {
                return `Admin with admin_id ${admin_id} has been deleted.`;
            } else {
                throw new Error(`Admin with admin_id ${admin_id} not found.`);
            }
        } catch (error) {
            console.error('Error deleting Admin:', error);
            throw error;
        }
    }
}
module.exports = Admin;

console.log(Admin.createAdmin(db,{
    
    "institute_name":"CEG",
    "phone_no":"1234567890",
    "current_plan":"1205",
    "plan_expire":"2018-08-12 00:00:00"
}))