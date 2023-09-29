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



router.post('/create_teacher', async (req, res) => {
    try {
        // Attempt to create a new student
        const result = await obj.teacher.createTeacher(db, req.body);
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message": "Successfully inserted" });
        } else {
            res.status(500).json({ "error": "Failed to create student" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error creating teacher:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});



router.post('/create_standard', async (req, res) => {
    try {
        // Attempt to create a new student
        const result = await obj.standard.createStandard(db, req.body);
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message": "Successfully inserted" });
        } else {
            res.status(500).json({ "error": "Failed to create student" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error creating standard:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});



router.post('/create_section', async (req, res) => {
    try {
        // Attempt to create a new student
        const result = await obj.section.createSection(db, req.body);
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message": "Successfully inserted" });
        } else {
            res.status(500).json({ "error": "Failed to create student" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error creating section:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});


router.post('/create_subject', async (req, res) => {
    try {
        // Attempt to create a new student
        const result = await obj.subject.createSubject(db, req.body);
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message": "Successfully inserted" });
        } else {
            res.status(500).json({ "error": "Failed to create student" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error creating subject:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});


router.post('/create_exam', async (req, res) => {
    try {
        // Attempt to create a new student
        const result = await obj.exam.createExam(db, req.body);
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message": "Successfully inserted" });
        } else {
            res.status(500).json({ "error": "Failed to create student" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error creating exam:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});


router.post('/create_absents', async (req, res) => {
    try {
        // Attempt to create a new student
        const result = await obj.attendance.createRows(db,req.body);
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message": "Successfully inserted" });
        } else {
            res.status(500).json({ "error": "Failed to create student" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error creating absents:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});










module.exports = router