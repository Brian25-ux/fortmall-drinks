import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const Mpesapayment = () => {
  // declaring stae variables
  const{product} = useLocation().state ||{};
  const[phone,setPhone] = useState("")
  const[message,setMessage] =useState("")
  const[error, setError] = useState("")

  // image url

  const img_url = "https://brianhyrax.alwaysdata.net/static/images/"

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setMessage("Please wait as we process the transaction")
    try {
      // retrieving user and products details
      const formData= new FormData()
      formData.append("phone",phone)
      formData.append("amount",product.product_cost)

      // adding the base url
      const response = await axios.post("https://brianhyrax.alwaysdata.net/api/mpesa_payment",formData)
      console.log(response.data)
    } catch (error) {
      setError(error.message)
      
    }
  }

  return (
    <div className='row  justify-content-center mb-4'>
      <h1 id='h1mpesa'>LIPA NA MPESA</h1>
      <div className=' col-md-6 card shadow card-margin p-2'>
      <img  className='mt-2 product_img' src={img_url + product.product_photo} alt={product.product_photo} />
      <p>Product Name :{product.product_name}</p>
      <p className='text-warning'>Drink Cost :Ksh. {product.product_cost}</p>
      {/* bind variables */}
      {phone}
      {message}
      {error}

      {/* phone input */}

      <form action= "" onSubmit={handleSubmit}>
        <label>Phone number</label>
        <input type="tel"
               placeholder='Enter your phone number'
               className='form-control'
               onChange={(e)=>setPhone(e.target.value)} /><br/>
        
        <button className='btn btn-dark'>
          Make payment
        </button>

      </form>
      </div>
    </div>
  )
}

export default Mpesapayment