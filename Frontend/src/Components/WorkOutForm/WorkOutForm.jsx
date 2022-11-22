import React, { useState } from "react";
import "./workOutForm.css";
import { useNavigate } from 'react-router-dom'


const WorkOutForm = () => {
  const [title, setTitle] = useState("");
  const [repeat, setRepeat] = useState("");
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const workout = {title, repeat, load}

    const response =  await fetch('api/workout/', {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "content-type": "application/json"
      }
    })
    const json = response.json();
    
    setError(json.error)

    if(response.ok){
      setTitle()
      setRepeat()
      setLoad()
      setError(null) 
      console.log('Values add successfully', json) 
    }
  };



  const pathValidation = (e) => {
    
    e.preventDefault();
    navigate('/');

  }

  return (
    <div class="login-box">
      <h2>MERN CRUD</h2>
      <form onClick={submitHandler}>
        <div class="user-box">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label>Name</label>
        </div>
        <div class="user-box">
          <input
            type="number"
            value={repeat}
            onChange={(e) => setRepeat(e.target.value)}
            required
          />
          <label>Repetition</label>
        </div>

        <div class="user-box">
          <input
            type="number"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
            required
          />
          <label>Load</label>
        </div>
        <a type="button" className="btn" onClick={pathValidation}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>

  );
};

export default WorkOutForm;
