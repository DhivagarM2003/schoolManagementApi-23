const db = require('../models/database'); 

class Standard{
 

 static async createStandard(db, obj) {
    try {
       
         
        const newStandard = await db.standard.create(obj);
        return newStandard;
    } catch (error) {
        console.error('Error creating Standard:', error);
        throw error;
    }
}

static async updateStandard(db, standard_name, updatedData) {
    try {
        const [updatedCount, updatedStandards] = await db.standard.update(updatedData, {
            where: { standard_name: standard_name }
        });

        if (updatedCount > 0) {
            return updatedStandards;
        } else {
            throw new Error(`Standard with Standard_id ${standard_name} not found.`);
        }
    } catch (error) {
        console.error('Error updating Standard:', error);
        throw error;
    }
}

static async deleteStandard(db, standard_name) {
    try {
        const deletedCount = await db.standard.destroy({
            where: { standard_name: standard_name }
        });

        if (deletedCount > 0) {
            return `Standard with standard_name ${standard_name} has been deleted.`;
        } else {
            throw new Error(`Standard with standard_name ${standard_name} not found.`);
        }
    } catch (error) {
        console.error('Error deleting Standard:', error);
        throw error;
    }
}



}
module.exports = Standard;

/*
console.log(Standard.createStandard(db,{
    "standard_name":"class 2",
    "curriculum":"Ennum Ezhuthum"

}))

console.log(Standard.updateStandard(db,"class 1",{
    "standard_name":"class 1",
    "curriculum":"Ennum Ezhuthum(EE)"
})) */

 // console.log(Standard.deleteStandard(db,"class 2"));