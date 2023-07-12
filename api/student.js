const express = require("express");
//const bodyparser=require("body-parser");
const db = require('../models/database');



const router =express.Router()

//router.use(bodyparser.urlencoded({ extended: false }));
router.use(express.json());
const dbConfig = require("../models/config");

const Sequeliz = require("sequelize");
const Sequelize = new Sequeliz(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,
  operationsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
 
router.post('/personal',async (req,res)=>{
    const id=req.body.student_id
    // console.log(name) 
    const inf= await db.student.findOne({where:{s_id:id}});
    res.status(200).json(inf)
})


router.post('/activity',async (req,res)=>{
    const id=req.body.student_id
    // console.log(name) 
    const inf= await db.activity.findOne({where:{s_id:id}});
    res.status(200).json(inf)
})

router.post('/exams',async (req,res)=>{
    const id=req.body.exam_id;
    const inf= await db.exams.findOne({where:{e_id:id}});
    res.status(200).json(inf)
})

router.post('/subject',async (req,res)=>{
    const id=req.body.student_id;
      Sequelize.query("select subjects.subject_name,subjects.subject_id,subjects.t_id  from subjects,sections,students where subjects.t_id=sections.t_id and sections.section_id=students.section_id and students.s_id=" + id + ";").then(results => {
        
        res.status(200).json(results[0])
        // console.log(results);
     })
})
    // const id=req.body.exam_id;
//     const inf= await db.exams.findOne({where:{e_id:id}});
//     res.status(200).json(inf)
// })


router.post('/subject_marks',async (req,res)=>{
    const id=req.body.subject_id;
    const id1=req.body.student_id;
    const inf= await db.marks.findAll({where:{subject_id:id,s_id:id1 }});
    res.status(200).json(inf)
})



router.post('/marks',async (req,res)=>{
    const id=req.body.student_id;
    // console.log(name) 
    const inf= await db.marks.findOne({where:{s_id:id}});
    res.status(200).json(inf)
})
// var sname=req.body.sname;
// const inf= await db.student_register.findOne({where:{id:sname}});
module.exports=router