const db = require('../models/database'); 

class calendar {
    
    static async createEvent(db, date, event, status) {
        try {
            const newEvent = await db.calendar.create({
                date: date,
                event: event,
                status: status
            });
            return newEvent;
        } catch (error) {
            console.error('Error creating event:', error);
            throw error;
        }
    }

    static async updateEvent(db, date, updatedData) {
        try {
            const [updatedCount, updatedEvents] = await db.calendar.update(updatedData, {
                where: { date: date }
            });

            if (updatedCount > 0) {
                return true;
            } else {
                throw new Error(`Event for date ${date} not found.`);
            }
        } catch (error) {
            console.error('Error updating event:', error);
            throw error;
        }
    }
        
    static async deleteEvent(db, date) {
        try {
            const deletedCount = await db.calendar.destroy({
                where: { date: date }
            });

            if (deletedCount > 0) {
                return `Event for date ${date} has been deleted.`;
            } else {
                throw new Error(`Event for date ${date} not found.`);
            }
        } catch (error) {
            console.error('Error deleting event:', error);
            throw error;
        }
    }
}

module.exports = calendar;
