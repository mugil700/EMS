import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/employees');
      setEmployees(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteEmployee = async (empId) => {
    try {
      await axios.delete(`http://localhost:5000/api/employees/${empId}`);
      fetchEmployees(); // Refresh the list
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>Employee List</h1>
      <Link to="/add">Add Employee</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.salary}</td>
              <td>
                <Link to={`/edit/${employee._id}`}>Edit</Link> | 
                <button onClick={() => deleteEmployee(employee._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
