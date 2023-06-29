module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Dhiva",
  DB: "school_mate",
  dialect: "mysql",
  //   dialectOptions: { ssl: true },
  pool: {
    max: 5,
    min: 0,
    acquire: 50000,
    idle: 5432,
  },
};
