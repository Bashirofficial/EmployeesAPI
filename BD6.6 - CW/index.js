const express = require('express');
const app = express();
app.use(express.json());

app.use(cors());
app.use(express.json());

app.get('/employees', async (req, res) => {
  const employees = getAllEmployees();
  res.json({ employees });
});

app.get('/employees/details/:id', async (req, res) => {
  let employee = getEmployeesById(parseInt(req.params.id));
  res.json({ employees });
});

module.exports = { app };
