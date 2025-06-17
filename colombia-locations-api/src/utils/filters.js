function filterCitiesByDepartment(departmentId, cities) {
    return cities.filter(city => city.departmentId === departmentId);
}

module.exports = {
    filterCitiesByDepartment
};