const express = require("express");

const db = require('../models/database');
const obj = require("../controllers/obj");

const router =express.Router()

router.use(express.json());



router.post('/delete_student', async (req, res) => {
    try {
        const s_id = req.body.s_id;
        const message = await obj.student.deleteStudent(db, req.body.s_id);
        res.status(200).json({ "message": message });
    } catch (error) {
        res.status(500).json({ "error": "Error deleting student", "details": error.message });
    }
});


router.post('/delete_teacher', async (req, res) => {
    try {
        const s_id = req.body.s_id;
        const message = await obj.teacher.deleteTeacher(db, req.body.t_id);
        res.status(200).json({ "message": message });
    } catch (error) {
        res.status(500).json({ "error": "Error deleting teacher", "details": error.message });
    }
});

router.post('/delete_standard', async (req, res) => {
    try {
        const s_id = req.body.s_id;
        const message = await obj.standard.deleteStandard(db, req.body.standard_name);
        res.status(200).json({ "message": message });
    } catch (error) {
        res.status(500).json({ "error": "Error deleting standard", "details": error.message });
    }
});

router.post('/delete_section', async (req, res) => {
    try {
        const s_id = req.body.s_id;
        const message = await obj.section.deleteSection(db, req.body.section_id);
        res.status(200).json({ "message": message });
    } catch (error) {
        res.status(500).json({ "error": "Error deleting section", "details": error.message });


    }
});

router.post('/delete_subject', async (req, res) => {
    try {
        const s_id = req.body.s_id;
        const message = await obj.subject.deleteSubject(db, req.body.subject_id);
        res.status(200).json({ "message": message });
    } catch (error) {
        res.status(500).json({ "error": "Error deleting subject", "details": error.message });
    }
});


router.post('/delete_exam', async (req, res) => {
    try {
        const s_id = req.body.s_id;
        const message = await obj.exam.deleteExam(db, req.body.e_id);
        res.status(200).json({ "message": message });
    } catch (error) {
        res.status(500).json({ "error": "Error deleting exam", "details": error.message });
    }
});

router.post('/delete_absents', async (req, res) => {
    try {
        
        const message = await obj.attendance.deleteabsents(db, req.body.s_id,req.body.standard_name);
        res.status(200).json({ "message": message });
    } catch (error) {
        res.status(500).json({ "error": "Error deleting absemts", "details": error.message });
    } 
});


router.post('/delete_event', async (req, res) => {
    try {
        const { date } = req.body;
        const message = await obj.calendar.deleteEvent(db, date);
        res.status(200).json({ "message": message });
    } catch (error) {
        res.status(500).json({ "error": "Error deleting event", "details": error.message });
    }
});



module.exports = router