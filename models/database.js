const dbConfig = require("./config");

const Sequeliz = require("sequelize");
const Sequelize = new Sequeliz(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,
  operationsAliases: false,
  port:3306,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.Sequelize = Sequelize;


db.standard = require("./standard")(Sequelize, Sequeliz.DataTypes);
db.teacher = require("./teacher")(Sequelize, Sequeliz.DataTypes);
db.subjectstaff = require("./subjectstaff")(Sequelize, Sequeliz.DataTypes);
db.subject = require("./subject")(Sequelize, Sequeliz.DataTypes);
db.admin = require("./admin")(Sequelize, Sequeliz.DataTypes);
db.exams = require("./exams")(Sequelize, Sequeliz.DataTypes);
db.section = require("./section")(Sequelize, Sequeliz.DataTypes);
db.student = require("./student")(Sequelize, Sequeliz.DataTypes);



db.Sequelize.sync({ force: false, alter: true }).then(() => {
  console.log("database connected 😀 ");
});
module.exports = db;
