const express = require("express");
//const bodyparser=require("body-parser");
const db = require('../models/database');


const router =express.Router()

//router.use(bodyparser.urlencoded({ extended: false }));
router.use(express.json());

 
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
    const id=req.body.exam_id
    // console.log(name) 
    const inf= await db.exams.findOne({where:{e_id:id}});
    res.status(200).json(inf)
})

router.post('/marks',async (req,res)=>{
    const id=req.body.student_id
    // console.log(name) 
    const inf= await db.marks.findOne({where:{s_id:id}});
    res.status(200).json(inf)
})
// var sname=req.body.sname;
// const inf= await db.student_register.findOne({where:{id:sname}});
module.exports=router