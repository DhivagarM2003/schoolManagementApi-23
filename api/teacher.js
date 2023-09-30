const express = require("express");
const db = require("../models/database");


const router = express.Router();
router.use(express.json());
router.post("/", async (req, res) => {
  const id = req.body.t_id;
  const teacher = await db.teacher.findOne({
    where: {
      t_id: id,
    },
  });
  res.status(200).json(teacher);
  // console.log(teacher);
});

router.post("/create_activity", async (req, res) => {
  const { s_id, section_id, t_id, content } = req.body;
  const a_id = uuidv4();
  const activity = await db.activity.create({
    a_id,
    s_id,
    section_id,
    t_id,
    content,
  });
  res.status(200).end();
});

router.post("/show_activity", async (req, res) => {
  const teacherId = req.body.s_id;
  const activities = await db.activity.findAll({
    where: {
      s_id: teacherId,
    },
  });
  res.status(200).json(activities);
});

router.post("/show_class", async (req, res) => {
  const teacherId = req.body.t_id;
  const subjects = await db.subject.findAll({
    where: {
      t_id: teacherId,
    },
  });
  const sections = await db.section.findAll({
    where: {
      t_id: teacherId,
    },
  });

  const classInfo = {
    sections,
    subjects,
  };

  res.status(200).json(classInfo);
});

router.post("/update_marks", async (req, res) => {
  const { exam_id, subject_id } = req.body;
  const updatedSubject = await db.subject.update(
    { exam_id },
    {
      where: {
        subject_id,
      },
    }
  );
  res.status(200).json({ message: "Subject info updated successfully" });
});

router.post("/show_mark", async (req, res) => {
  const examId = req.body.exam_id;
  const subjects = await db.subject.findAll({
    where: {
      e_id: examId,
    },
  });
  res.status(200).json(subjects);
});
module.exports = router;
