const express = require('express');
const departmentsData = require('../data/departments.json');
const citiesData = require('../data/cities.json');
const { filterCitiesByDepartment } = require('./utils/filters');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/departments', (req, res) => {
    res.json(departmentsData);
});

app.get('/api/cities', (req, res) => {
    const departmentId = req.query.departmentId;
    if (departmentId) {
        const filteredCities = filterCitiesByDepartment(departmentId, citiesData);
        res.json(filteredCities);
    } else {
        res.json(citiesData);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});