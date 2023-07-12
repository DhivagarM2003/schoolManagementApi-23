const express = require("express");
//const bodyparser=require("body-parser");
const db = require('../models/database');
const { v4 : uuidv4 } = require("uuid");
// const sequelize = require("sequelize");
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

// const sequelize = new Sequelize('school_mate', 'Root', '1234','mysql');

const router =express.Router()

//router.use(bodyparser.urlencoded({ extended: false }));
router.use(express.json());

 
router.post('/create_admin',async (req,res)=>{
    const {institute_name,phone_number,current_plan,plan_expire}=req.body;
    const admin_id = uuidv4();
    const admin = await db.admin.create({institute_name,admin_id,phone_number,current_plan,plan_expire});
    
    // console.log(name) 
    // const inf= await db.student.findOne({where:{s_id:id}});
    res.status(200).json({ message: "successfully inserted","Admin_id":admin_id });
})


router.post('/create_student',async (req,res)=>{
    const {s_name,admin_id,section_id,blood_group,address,father_name,emis_no,fees,due,phone_no_1,phone_no_2,gender,img}=req.body;
    const s_id = uuidv4();
    const stu = await db.student.create({s_name,s_id,admin_id,section_id,blood_group,address,father_name,emis_no,fees,due,phone_no_1,phone_no_2,gender,img});
    res.status(200).end();   
})

// Send Section name, teacher id , Standard, pin in Post request

router.post('/create_section',async (req,res)=>{
    const {section_name,t_id,standard}=req.body;
    const section_id = uuidv4();
    const section = await db.section.create({section_name,section_id,t_id,standard});
    res.status(200).json({ message: "successfully inserted" });   
})

router.post('/create_teacher',async (req,res)=>{
    const {t_name,admin_id,phone_no,qualification,gender,img,designation,bank_ac_detail,address,salary}=req.body;
    const t_id = uuidv4();
    const teacher = await db.teacher.create({t_name,t_id,admin_id,phone_no,qualification,gender,img,designation,bank_ac_detail,address,salary});
    res.status(200).json({ message: "successfully inserted" });   

})

router.post('/create_exam',async (req,res)=>{
    const {e_name,standard,subjects,e_date}=req.body;
    const e_id = uuidv4();
    const section = await db.exams.create({e_name,e_id,standard,subjects,e_date});
    res.status(200).json({ message: "successfully inserted" });   
})

router.post('/view_personal',async (req,res)=>{
    const id=req.body.admin_id;
    const inf= await db.admin.findAll({where:{admin_id:id}});
    res.status(200).json(inf)
})

router.post('/view_section',async (req,res)=>{
    const id=req.body.admin_id;
    // const [results, metadata] = await sequelize.query(
    //     "select * from sections,teachers where sections.t_id=teachers.t_id and teachers.admin_id=" + id + ";"
    //   );
      Sequelize.query("select sections.section_name,sections.section_id,sections.t_id,sections.standard from sections,teachers where sections.t_id=teachers.t_id and teachers.admin_id=" + id + ";").then(results => {
        
        res.status(200).json(results[0])
        // console.log(results);
     })
})


router.post('/view_student',async (req,res)=>{
    const id=req.body.admin_id;
    const inf= await db.student.findAll({where:{admin_id:id}});
    res.status(200).json(inf)
})


router.post('/view_teacher',async (req,res)=>{
    const id=req.body.admin_id;
    const inf= await db.teacher.findAll({where:{admin_id:id}});
    res.status(200).json(inf)
})

router.post('/view_exam',async (req,res)=>{
    const id=req.body.admin_id;
    const inf= await db.exams.findAll({where:{admin_id:id}});
    res.status(200).json(inf)
})


// const { sequelize } = require('./models'); // Assuming you have initialized Sequelize

// sequelize.query('SELECT * FROM your_table', { type: sequelize.QueryTypes.SELECT })
//   .then(results => {
//     // Handle the query results here
//   })
//   .catch(error => {
//     // Handle the error here
//   });

// // var sname=req.body.sname;
// // const inf= await db.student_register.findOne({where:{id:sname}});
 module.exports=router