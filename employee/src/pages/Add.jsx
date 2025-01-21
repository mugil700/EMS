import React, { useState } from 'react'
import "./add.css"
import Navbar from '../components/Navbar'
import axios from 'axios'

const Add = () => {
  const[name,setName]=useState()
  const[age,setAge]=useState(18)
  const[role,setRole]=useState("Junior")
  const[city,setCity]=useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/add',{name, age, role, city})
    .then(result => {
      alert(result.data)
    })
    .catch(err => console.log(err.response.data))
  }
  return (
    <>
    
    <Navbar/>
    <br/>
    <div>
    
      <marquee>Enter employee Details</marquee>
      <br/>
      <br/>
    
      <div id='add'>
  <form onSubmit={handleSubmit}>
    <label for="name"> Name</label>
    <input type="text" id="name" placeholder="Employee name.." onChange={(e)=> setName(e.target.value)}/>
    
    <label for="age">Age</label>
    <select id="age" onChange={(e)=> setAge(e.target.value)}>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
      <option value="26">26</option>
      <option value="27">27</option>
      <option value="28">28</option>
      <option value="29">29</option>
      <option value="30">30</option>
      <option value="31">31</option>
      <option value="32">32</option>  
    </select>
  
 

    <label for="role">Role</label>
    <select id="role" onChange={(e)=> setRole(e.target.value)}>
      <option value="junior">Junior</option>
      <option value="senior">Senior</option>
      <option value="S.junior">S.junior</option>
      <option value="S.senior">S.senior</option>
    
  
    </select>

    <label for="city"> City</label>
    <input type="text" id="city" placeholder="Employee city.." onChange={(e)=> setCity(e.target.value)}/>
  
    <input type="submit" value="Add"/>
  </form>
</div>

    </div>
    </>
  )
}

export default Add