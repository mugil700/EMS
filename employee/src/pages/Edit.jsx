import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
import "./edit.css";
import Navbar from '../components/Navbar';

const Edit = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/fetch");
      setUsers(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete("http://localhost:5000/deleteuser", {
        data: { id: userId },
      });
      alert(response.data.message);
      fetchUsers(); // Refresh the user list
    } catch (e) {
      console.error(e);
    }
  };

  const editUser = (userName) => {
    navigate(`/edituser/${userName}`); // Navigate to the EditUser page with the user's name
  };

  return (
    <>
      <Navbar />
      <br />
      <div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.city}</td>
                  <td>
                    <button
                      className="btn green"
                      onClick={() => editUser(user.name)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn red"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Edit;
