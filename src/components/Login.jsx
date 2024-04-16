import React, { useState } from 'react'
import '../css/Login.css'

document.title = 'Login | MaterDei Admin'

let time = new Date().getHours()


function Login() {
    const [formData, setFormData] = useState({userName: '', password: ''})

    function handleClick(event) {
        setFormData(prev => {
            return {userName: '', password: ''}
        })
        alert('The form was submitted')
        event.preventDefault()
    }

    function handleChange(event) {
        setFormData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
  return (
    <div className="form-container">
    <form action="">
      <h1 className="intro">{time < 12 ? 'Mwaramutse' : 'Mwiriwe'} neza<span> {formData.userName}!</span></h1>

      <div className="input-container">
        <i className="bi bi-person icon"></i>
        <input
          type="text"
          className="input-field"
          name="userName"
          value={formData.userName}
          placeholder="Enter Username"
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-container">
        <i className="bi bi-key icon"></i>
        <input
          type="password"
          className="input-field"
          name="password"
          value={formData.password}
          placeholder="Password"
          required
          onChange={handleChange}
        />
      </div>

      <button onClick={handleClick} className="login-btn">Login <i className='bi bi-box-arrow-in-right icon-white'></i></button>
    </form>
  </div>
  )
}

export default Login