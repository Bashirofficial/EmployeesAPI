const express = require("express");
const cors = require("cors");
const app = express();
let { getAllEmployees, getEmployeesById } = require("./controllers");
app.use(express.json());
app.use(cors());

app.get("/employees", async (req, res) => {
  const employees = getAllEmployees();
  res.json({ employees });
});

app.get("/employees/details/:id", async (req, res) => {
  let employee = getEmployeesById(parseInt(req.params.id));
  res.json({ employee });
});

module.exports = { app };
