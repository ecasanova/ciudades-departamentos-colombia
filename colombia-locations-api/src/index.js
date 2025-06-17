const express = require('express');
const api = require('./api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/departments', api.getDepartments);
app.get('/cities', api.getCitiesByDepartment);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});