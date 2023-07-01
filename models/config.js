module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Dhiva2003@",
  DB: "school_mate",
  dialect: "mysql",
  //dialectOptions: {ssl:true},
  pool: {
    max: 5,
    min: 0,
    acquire: 5000,
    idle: 3306,
  },
};
