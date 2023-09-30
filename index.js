const express = require("express");
const app = express();
const student = require("./api/student");
const teacher = require("./api/teacher");
const createAdminRoutes = require("./routes/create_route");
const updateAdminRoutes = require("./routes/update_route");
const deleteAdminRoutes = require("./routes/delete_route");
app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});
app.use("/student", student);
app.use("/teacher", teacher);

app.use("/admin", createAdminRoutes);
app.use("/admin", updateAdminRoutes);
app.use("/admin", deleteAdminRoutes);