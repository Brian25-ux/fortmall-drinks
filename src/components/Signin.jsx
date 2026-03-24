import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
  // declaring state  
  const[email,setEmail]= useState("")
  const[password,setPassword]= useState("")
  // state messages
  const[loading,setLoading] = useState("")
  const[error,setError] = useState("")
  const[success,setSuccess] = useState("")

  const navigate=useNavigate()
  const handleSignin = async(e)=>{
    e.preventDefault()
    setLoading("Please wait...")
  
  try {
    
    const formData= new FormData();
    formData.append("email",email)
    formData.append("password",password)

    const response =await axios.post("https://brianhyrax.alwaysdata.net/api/signin",formData);

    if(response.data.user){
      setSuccess(response.data.message)
      setLoading("")
      localStorage.setItem("user",JSON.stringify(response.data.user))
      // navigation onsuccessful signin
      navigate("/")
    }
  } catch (error) {
    setError(error)
    
  }
}
  return (
    <div className='row justify-content-center'>
      <div className='col-md-6 card shadow m-2 p-4 form' id='trans'>
        <h1 id=''>Signin</h1>
        {/* binding from forms */}
        {loading}<br/>
        {error}<br/>
        {success}<br/>
        <form action="" onSubmit={handleSignin}>
          <input type="email" placeholder='Enter your email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/><br />
          <input type= "password" placeholder='Enter your password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/><br/>
          <input type='submit' value='sign in' className='btn btn-info'/><br />
          <p id='ptag'>Don't Have An Account?<Link to ="/signin"> Signup</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signin