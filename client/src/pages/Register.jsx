import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  
  //SET USER INPUT DATA
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })

  //SET ERROR MESSAGE
  const [err, setError] = useState(null)

  //HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setError(null)
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  } 

  //REDIRECT USER TO HOMEPAGE AFTER SUCCESSFUL LOGIN
  const navigate = useNavigate()

  //Send user input to endpoint
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8000/api/auth/register", inputs)
      navigate('/login');
    } catch (err) {
      setError(err.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>Sign up</h1>
      <form>
        <input
          required
          name='username'
          type="text"
          placeholder='username'
          onChange={handleChange} />
        <input
          required
          name='email'
          type="email"
          placeholder='email'
          onChange={handleChange} />
        <input
          required
          name='password'
          type="password"
          placeholder='password'
          onChange={handleChange} />
        <button onClick={handleSubmit}>Sign up</button>
        {err && <p>{err}</p>}
        <span>Already have an account? <Link to='/login'>Sign in</Link> </span>
      </form>
    </div>
  )
}


export default Register