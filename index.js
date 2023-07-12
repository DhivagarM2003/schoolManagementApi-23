const express = require("express");
const app = express();
const student = require("./api/student");
const teacher = require("./api/teacher");
const admin = require("./api/admin");
app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});
app.use("/student", student);
app.use("/teacher", teacher);
app.use("/admin", admin);
