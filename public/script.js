// script.js - Interacción con la API desde el frontend
document.addEventListener('DOMContentLoaded', () => {
    const departmentList = document.getElementById('department-list');
    const cityList = document.getElementById('city-list');
    
    // Cargar los departamentos al iniciar la página
    fetch('/api/departments')
        .then(response => response.json())
        .then(departments => {
            departments.forEach(department => {
                const li = document.createElement('li');
                li.textContent = department.name;
                li.setAttribute('data-id', department.id);
                li.addEventListener('click', () => loadCitiesByDepartment(department.id));
                departmentList.appendChild(li);
            });
        })
        .catch(error => console.error('Error cargando departamentos:', error));
    
    // Cargar todas las ciudades inicialmente
    fetch('/api/cities')
        .then(response => response.json())
        .then(cities => {
            displayCities(cities);
        })
        .catch(error => console.error('Error cargando ciudades:', error));
    
    // Función para cargar ciudades de un departamento específico
    function loadCitiesByDepartment(departmentId) {
        fetch(`/api/cities?departmentId=${departmentId}`)
            .then(response => response.json())
            .then(cities => {
                displayCities(cities);
            })
            .catch(error => console.error('Error cargando ciudades del departamento:', error));
    }
    
    // Función para mostrar las ciudades en la lista
    function displayCities(cities) {
        // Limpiar la lista antes de agregar nuevas ciudades
        cityList.innerHTML = '';
        
        cities.forEach(city => {
            const li = document.createElement('li');
            li.textContent = city.name;
            cityList.appendChild(li);
        });
    }
});
