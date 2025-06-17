# Colombia Locations API

This project provides a public API for accessing information about departments and cities in Colombia. It allows users to retrieve a list of departments and filter cities based on the selected department.

![Screenshot 2025-06-17 at 4 13 23 PM](https://github.com/user-attachments/assets/5193e8e6-6928-4097-a40d-d776da33072f)

## Project Structure

```
colombia-locations-api
├── data
│   ├── departments.json      # JSON file containing all departments in Colombia
│   ├── cities.json           # JSON file containing cities associated with departments
│   └── locations.json        # Combined data of departments and cities
├── src
│   ├── index.js              # Entry point for the application
│   ├── api.js                # Defines API endpoints for departments and cities
│   └── utils
│       └── filters.js        # Utility functions for filtering cities by department
├── public
│   └── index.html            # Main HTML file for the public interface
├── package.json              # Configuration file for npm
├── README.md                 # Documentation for the project
└── LICENSE                   # Licensing information
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/colombia-locations-api.git
   ```

2. Navigate to the project directory:
   ```
   cd colombia-locations-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

## Usage

- To retrieve all departments, send a GET request to `/api/departments`.
- To filter cities by department ID, send a GET request to `/api/cities?departmentId={id}`.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
