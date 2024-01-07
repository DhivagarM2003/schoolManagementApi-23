const express = require("express");
const cors = require("cors");
const app = express();
const student = require("./api/student");
const teacher = require("./api/teacher");
const createAdminRoutes = require("./routes/create_route");
const updateAdminRoutes = require("./routes/update_route");
const deleteAdminRoutes = require("./routes/delete_route");
const viewAdminRoutes   = require("./routes/view_route");
app.use(cors()); // Enable CORS for all routes
app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});
app.use("/student", student);
app.use("/teacher", teacher);

app.use("/admin", createAdminRoutes);
app.use("/admin", updateAdminRoutes);
app.use("/admin", deleteAdminRoutes);
app.use("/admin", viewAdminRoutes);