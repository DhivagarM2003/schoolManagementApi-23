class marks{
 

    static async createTable(db, table_name) {
        try {             
            
    
            // Create a new table with the dynamic table name
            await db.Sequelize.query(`CREATE TABLE ${table_name} (s_id VARCHAR(16) REFERENCES students(s_id)
             ,score INT, exam_id VARCHAR(20)  REFERENCES exams(exam_id));`);
    
            return true;
        } catch (error) {
            console.error('Error creating marks:', error);
            throw error;
        }
    }
    static async createRows(db, standard_name,exam_id) {
        try {             
            
    
            // Fetching rows of  students in the given standard
            const students = await db.Sequelize.query(`SELECT s_id FROM sections,students WHERE sections.standard = ${standard_name} and students.section_id = sections.section_id;`);
            
            const table_name="marks"+standard_name
            console.log(students[0])
            for(var i=0;i<students[0].length;i++){
                
                const s_id = students[0][i].s_id; // Replace with the actual student ID
                

                const sql = `INSERT INTO ${table_name} (s_id, exam_id) VALUES (?, ?);`;
                const parameters = [s_id, exam_id];

            // Now, you can execute the SQL query with the parameters using your database library (e.g., Sequelize):
            // Example using Sequelize:
            db.Sequelize.query(sql, {
            replacements: parameters,
            type: db.Sequelize.QueryTypes.INSERT
            })
            .then((result) => {
                    console.log('Query executed successfully.');
                 })
        .       catch((error) => {
                console.error('Error executing query:', error);
                }); 
                //await db.Sequelize.query("INSERT INTO ${table_name} (s_id,exam_id) VALUES (${students[0][i].s_id},${exam_id});");
                 console.log(students[0][i].s_id)                 
            }
            return true;
        } catch (error) {
            console.error('Error creating msrks:', error);
            throw error;
        }
    }


    static async updateScore(db, standard_name, s_id, exam_id, newScore) {
        try {
            const table_name = "marks" + standard_name; // Concatenate standard_name to form table_name
    
            const sql = `UPDATE ${table_name} SET score = ? WHERE s_id = ? AND exam_id = ?;`;
            const parameters = [newScore, s_id, exam_id];
    
            await db.Sequelize.query(sql, {
                replacements: parameters,
                type: db.Sequelize.QueryTypes.UPDATE
            });
    
            return `Score updated for s_id: ${s_id}, exam_id: ${exam_id}`;
        } catch (error) {
            console.error('Error updating score:', error);
            throw error;
        }
    }
    
}

    
    module.exports = marks