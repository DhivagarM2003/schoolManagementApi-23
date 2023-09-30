


class attendance {
    static async createTable(db, table_name) {
        try {
            // Create a new table with the dynamic table name
            await db.Sequelize.query(`CREATE TABLE IF NOT EXISTS ${table_name} (id VARCHAR(100) PRIMARY KEY,s_id VARCHAR(100) REFERENCES students(s_id), date DATE);`);
            return true;
        } catch (error) {
            console.error('Error creating attendance table', error);
            throw error;
        }
    }

    static async createRows(db, obj) {
        try {
            // Assuming you have the date defined somewhere in your code
            const date = new Date(); 

           
           const table_name = "attendance" + obj.standard_name;
           
           const year = date.getFullYear().toString();
            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based, so add 1 and pad with zero if necessary
            const day = date.getDate().toString().padStart(2, '0');

                const formattedDate =  year + month + day; // Using the formatted date (YYYYMMDD)

                const id_con = formattedDate + obj.s_id.slice(0, 4);
            
            
                const sql = `INSERT INTO ${table_name} (id,s_id, date) VALUES (?, ?,?);`;
                const parameters = [id_con,obj.s_id, date];

                // Now, you can execute the SQL query with the parameters using your database library (e.g., Sequelize):
                // Example using Sequelize:
                

                await db.Sequelize.query(sql, {
                    replacements: parameters,
                    type: db.Sequelize.QueryTypes.INSERT
                });
                
            return true;
        } catch (error) {
            console.error('Error marking attendance:', error);
            throw error;
        }
    }
    
    static async deleteabsents(db, s_id,standard_name) {
        try {
            const table_name = "attendance" + standard_name;
            const result = await db.Sequelize.query(
                `DELETE FROM ${table_name} WHERE s_id = '${s_id}';`,
                {  type: db.Sequelize.QueryTypes.DELETE }
            );
            return true;
        } catch (error) {
            console.error('Error deleting Absentee:', error);
            throw error;
        }
    }
    

}



module.exports = attendance;
