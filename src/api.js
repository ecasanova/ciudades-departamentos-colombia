const departmentsData = require('../data/departments.json');
const citiesData = require('../data/cities.json');
const { filterCitiesByDepartment } = require('./utils/filters');

// Handler para obtener todos los departamentos
const getDepartments = (req, res) => {
    res.json(departmentsData);
};

// Handler para obtener ciudades, opcionalmente filtradas por departamento
const getCitiesByDepartment = (req, res) => {
    const departmentId = req.query.departmentId;
    if (departmentId) {
        // Convertir a número ya que los query params vienen como strings
        const numericDeptId = parseInt(departmentId, 10);
        const filteredCities = filterCitiesByDepartment(numericDeptId, citiesData);
        res.json(filteredCities);
    } else {
        res.json(citiesData);
    }
};

module.exports = {
    getDepartments,
    getCitiesByDepartment
};