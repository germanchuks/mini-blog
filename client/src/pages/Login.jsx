import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    //SET USER INPUT DATA
    const [inputs, setInputs] = useState({
      username: "",
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
        await axios.post("http://localhost:8000/api/auth/login", inputs)
        navigate("/");
      } catch (err) {
        setError(err.response.data)
      }
      // console.log(inputs)
    }
  
    return (
      <div className='auth'>
        <h1>Sign in</h1>
        <form>
          <input
            required
            name='username'
            type="text"
            placeholder='username'
            onChange={handleChange} />
  
          <input
            required
            name='password'
            type="password"
            placeholder='password'
            onChange={handleChange} />
          <button onClick={handleSubmit}>Sign in</button>
          {err && <p>{err}</p>}
          <span>Don't have an account? <Link to='/register'>Sign up</Link> </span>
        </form>
      </div>
    )
  }

export default Login
