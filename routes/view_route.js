const express = require("express");

const db = require('../models/database');
const obj = require("../controllers/obj");

const router = express.Router()

router.use(express.json());


router.post('/view_student', async (req, res) => {
    try {
        // Attempt to view a new student
        const result = await obj.student.view(db, req.body.section_id);

        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message": result });
        } else {
            res.status(500).json({ "error": "Failed to view student" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error viewing student:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/view_standard', async (req, res) => {
    try {
        // Attempt to view a new standard
        const result = await obj.standard.viewstandard();

        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ result });
        } else {
            res.status(500).json({ "error": "Failed to view standard" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error viewing student:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/view_section', async (req, res) => {
    try {
        // Attempt to view a new section
        const result = await obj.section.viewsection(req.body.standard);
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ result });
        } else {
            res.status(500).json({ "error": "Failed to view section" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error viewing student:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});  

router.post('/view_student', async (req, res) => {
    try {
        // Attempt to view a new student
        const result = await obj.student.view(db, req.body.section_id);
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message":result });
        } else {
            res.status(500).json({ "error": "Failed to view student" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error viewing student:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/view_teacher', async (req, res) => {
    try {
        const result = await obj.teacher.viewTeacher();
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message":result });
        } else {
            res.status(500).json({ "error": "Failed to view teacher" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error viewing teacher:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});
router.post('/view_teacher', async (req, res) => {
    try {
        const result = await obj.teacher.viewTeacher();
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message":result });
        } else {
            res.status(500).json({ "error": "Failed to view teacher" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error viewing teacher:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});
router.post('/view_teacherclass', async (req, res) => {
    try {
        const result = await obj.teacher.Teacherclass(req.body.t_id);
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message":result });
        } else {
            res.status(500).json({ "error": "Failed to view teacher" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error viewing teacher:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

module.exports = router;