import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  // state variables
  const[username,setUsername]= useState("")
  const[email,setEmail]= useState("")
  const[phone,setphone]= useState("")
  const[password,setPassword]= useState("")
  //status messages
const[loading,setLoading]=useState("")
const[error,setError]=useState("")
const[success,setSuccess]=useState("")

// function to submit
const handleSubmit=async(e)=>{
  e.preventDefault();
  setLoading("Please wait...");
  try{
    // retrieving user details
    const formData=new FormData();
    formData.append("username",username)
    formData.append("email",email)
    formData.append("phone",phone)
    formData.append("password",password)

    // adding bases url
    const response = await axios.post("https://brianhyrax.alwaysdata.net/api/signup",formData);

    setSuccess(response.data.success)
  }catch(error){
    setError(error)

  }
}
  return (
    <div className='row justify-content-center'>
      <div className='col-md-6 card shadow m-2 p-6'>
        <h1 id='h1'>Signup</h1>
        {/* value binding */}
        <h6 id=''>{loading}</h6><br/>
        {error}<br/>
        {success}<br/>
        <form onSubmit={handleSubmit}>
          <fieldset>
             <input type='text' placeholder='Enter username' className='form-control' onChange={(e)=>setUsername(e.target.value)}/><br />
            <input type='email' placeholder='Enter email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/><br />
            <input type='tel' placeholder='Enter phone number(254xxxxxxxxx)' className='form-control' onChange={(e)=>setphone(e.target.value)}/><br />
            <input type='password' placeholder='Enter your password' className='form-control'onChange={(e)=>setPassword(e.target.value)}/><br />

            <input type='submit' value='signup' className='btn btn-info' />
          </fieldset><br />
          {/* incase someone has already created account  */}
          <Link to='/signin'><p>Already have account?</p>Signin</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup