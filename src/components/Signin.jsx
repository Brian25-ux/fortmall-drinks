import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = ({ setUser }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const navigate = useNavigate()

  const handleSignin = async (e) => {
    e.preventDefault()

    setLoading("Please wait...")
    setError("")
    setSuccess("")

    try {

      const formData = new FormData()
      formData.append("email", email)
      formData.append("password", password)

      const response = await axios.post(
        "https://brianhyrax.alwaysdata.net/api/signin",
        formData
      )

      if (response.data?.user) {

        const userData = {
          id: response.data.user.id,
          username: response.data.user.username,
          email: response.data.user.email
        }

        //using session storage
        sessionStorage.setItem("user", JSON.stringify(userData))

        setUser(userData)

        setSuccess("Login successful")
        setLoading("")

        setTimeout(() => {
          navigate("/getdrink")
        }, 800)

      } else {
        setError("Invalid email or password")
        setLoading("")
      }

    } catch (err) {
      setError("Signin failed. Try again.")
      setLoading("")
    }
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-6 card shadow m-2 p-4'>
        <h1>Signin</h1>

        <h6>{loading}</h6>
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">{success}</p>}

        <form onSubmit={handleSignin}>

          <input
            type="email"
            placeholder='Enter email'
            className='form-control'
            onChange={(e) => setEmail(e.target.value)}
          /><br />

          <input
            type="password"
            placeholder='Enter password'
            className='form-control'
            onChange={(e) => setPassword(e.target.value)}
          /><br />

          <button className='btn btn-info w-100'>
            Sign in
          </button>

        </form>

        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>

      </div>
    </div>
  )
}

export default Signin;