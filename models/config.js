module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "schoolmate",
  dialect: "mysql",
  //dialectOptions: {ssl:true},
  pool: {
    max: 5,
    min: 0,
    acquire: 5000,
    idle: 3306,
  },
};
