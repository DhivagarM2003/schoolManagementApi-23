const id = require("shortid");
const db = require('../models/database');
class Section {
    static async createSection(db, obj) {
        try {

            obj.section_id =id.generate();
            const newSection = await db.section.create(obj);
            return newSection;
        } catch (error) {
            console.error('Error creating Section:', error);
            throw error;
        }
    }


    static async updateSection(db, section_id, updatedData) {
        try {
            const [updatedCount, updatedSections] = await db.section.update(updatedData, {
                where: { section_id: section_id }
            });

            if (updatedCount > 0) {
                return true;
            } else {
                throw new Error(`Section with section_id ${section_id} not found.`);
            }
        } catch (error) {
            console.error('Error updating Section:', error);
            throw error;
        }
    }



    static async deleteSection(db, section_id) {
        try {
            const deletedCount = await db.section.destroy({
                where: { section_id: section_id }
            });

            if (deletedCount > 0) {
                return `Section with section_id ${section_id} has been deleted.`;
            } else {
                throw new Error(`Section with section_id ${section_id} not found.`);
            }
        } catch (error) {
            console.error('Error deleting Section:', error);
            throw error;
        }
    }

    static async viewsection(std) {
        try {
            const sections = await db.Sequelize.query(`SELECT sections.section_name, sections.section_id, teachers.t_name  FROM sections, teachers where sections.standard = ${ std } AND sections.t_id = teachers.t_id ;`);
            return sections[0];
        } catch (error) {
            console.error("Error view:", error);
            throw error;
        }
    }


}

module.exports = Section;
/*
console.log(Section.createSection(db,{
    "section_name":"A",
    "section_id":"1",
    "t_id":"1", //notice here !!!!! ERROR generate carefully t_id and auto increment it
    "standard": "class 1",

}))
*/

