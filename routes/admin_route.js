const express = require("express");

const db = require('../models/database');
const obj = require("../controllers/obj");

const router =express.Router()

router.use(express.json());


router.post('/create_student', async (req, res) => {
    try {
        // Attempt to create a new student
        const result = await obj.student.createStudent(db, req.body);
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message": "Successfully inserted" });
        } else {
            res.status(500).json({ "error": "Failed to create student" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error creating student:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});




router.post('/update_student', async (req, res) => {
    try {
        // Attempt to update a student
        const result = await obj.student.updateStudent(db, req.body.s_id, req.body);
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message": "Successfully updated" });
        } else {
            res.status(500).json({ "error": "Failed to update student" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error updating student:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});



router.post('/delete_student', async (req, res) => {
    try {
        const s_id = req.body.s_id;
        const message = await obj.student.deleteStudent(db, req.body.s_id);
        res.status(200).json({ "message": message });
    } catch (error) {
        res.status(500).json({ "error": "Error deleting student", "details": error.message });
    }
});



module.exports = router