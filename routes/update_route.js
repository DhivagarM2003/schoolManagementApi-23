const express = require("express");

const db = require('../models/database');
const obj = require("../controllers/obj");

const router =express.Router()

router.use(express.json());



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


router.post('/update_teacher', async (req, res) => {
    try {
        // Attempt to update a student
        const result = await obj.teacher.updateTeacher(db, req.body.t_id, req.body);
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message": "Successfully updated" });
        } else {
            res.status(500).json({ "error": "Failed to update Teacher" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error updating teacher:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});


router.post('/update_standard', async (req, res) => {
    try {
        // Attempt to update a student
        const result = await obj.standard.updateStandard(db, req.body.standard_name, req.body);
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message": "Successfully updated" });
        } else {
            res.status(500).json({ "error": "Failed to update standard" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error updating standard:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/update_section', async (req, res) => {
    try {
        // Attempt to update a student
        const result = await obj.section.updateSection(db, req.body.section_id, req.body);
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message": "Successfully updated" });
        } else {
            res.status(500).json({ "error": "Failed to update section" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error updating section:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});


router.post('/update_subject', async (req, res) => {
    try {
        // Attempt to update a student
        const result = await obj.subject.updateSubject(db, req.body.subject_id, req.body);
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message": "Successfully updated" });
        } else {
            res.status(500).json({ "error": "Failed to update subject" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error updating subject:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});


router.post('/update_exam', async (req, res) => {
    try {
        // Attempt to update a student
        const result = await obj.exam.updateExam(db, req.body.e_id, req.body);
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message": "Successfully updated" });
        } else {
            res.status(500).json({ "error": "Failed to update exam" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error updating Exam:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});


router.post('/update_score', async (req, res) => {
    try {
        const { standard_name, s_id, exam_id, newScore } = req.body;

        // Attempt to update the score
        const message = await obj.marks.updateScore(db, standard_name, s_id, exam_id, newScore);

        // Check the result and send an appropriate response
        if (message) {
            res.status(200).json({ "message": message });
        } else {
            res.status(500).json({ "error": "Failed to update score" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error updating score:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/update_event', async (req, res) => {
    try {
        
        const result = await obj.calendar.updateEvent(db, req.body.date, req.body);
        if (result) {
            res.status(200).json({ "message": "Successfully updated" });
        } else {
            res.status(500).json({ "error": "Failed to update event" });
        }
    } catch (error) {
        res.status(500).json({ "error": "Error updating event", "details": error.message });
    }
}); 






































module.exports = router