import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEyeSlash } from "react-icons/fa"; // ✅ ADDED THIS

const Signup = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setphone] = useState("")
  const [password, setPassword] = useState("")
  const [dob, setDob] = useState("")

  const [showPassword, setShowPassword] = useState(false)

  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")
    setSuccess("")
    setLoading("Please wait...")

    try {

      const formData = new FormData()
      formData.append("username", username)
      formData.append("email", email)
      formData.append("phone", phone)
      formData.append("password", password)
      formData.append("dob", dob)

      const response = await axios.post(
        "https://brianhyrax.alwaysdata.net/api/signup",
        formData
      )

      const data = response.data

      if (data?.user || data?.success || data?.message) {

        setSuccess("Signup successful. Please sign in.")
        setLoading("")

        setTimeout(() => {
          navigate("/signin")
        }, 1000)

      } else {
        setError(data?.message || "Signup failed")
        setLoading("")
      }

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Signup failed. Check backend."
      )

      setLoading("")
    }
  }

  return (
    <div className='row justify-content-center align-items-center' style={{ minHeight: "80vh" }}>

      <div className='col-md-5 card p-4 signup-card'>

        <h1 className='text-primary mb-3'>Create Account</h1>

        <h6>{loading}</h6>
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">{success}</p>}

        <form onSubmit={handleSubmit}>
          <input
            className='form-control mb-3'
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='form-control mb-3'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className='form-control mb-3'
            placeholder='Phone'
            onChange={(e) => setphone(e.target.value)}
          />

          <input
            type='date'
            className='form-control mb-3'
            onChange={(e) => setDob(e.target.value)}
          />

          {/* ✅ ONLY EDITED PART */}
          <div className="input-group mb-3">
            <input
              type={showPassword ? "text" : "password"}
              className='form-control'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="input-group-text"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              <FaEyeSlash />
            </span>
          </div>

          <button className='btn btn-primary w-100 py-2 fw-bold shadow-sm'>
            Signup
          </button>
           <p>
              Already have an account? <Link to="/signin">Signin</Link>
          </p>  

        </form>

      </div>
    </div>
  )
}

export default Signup;