import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Adddrink = () => {
  // declaring state variables
  const[product_name, setProductName] = useState("")
  const[product_description, setProductDescription] = useState("")
  const[product_cost, setProductCost] = useState("")
  const[product_photo, setProductPhoto] = useState("")

  // status messages
  const[loading,setLoading]= useState("")
  const[error, setError]= useState("")
  const[success,setSuccess]= useState("")

  // function to add products to data bases
  const handleSubmit = async (e)=>{
    e.preventDefault()
    setLoading("Please wait...")
    try {
      // retrieving product details
      const formData= new FormData();
      formData.append("product_name",product_name)
      formData.append("product_description",product_description)
      formData.append("product_cost",product_cost)
      formData.append("product_photo", product_photo)

      // adding base url to post data
    const response =await axios.post("https://brianhyrax.alwaysdata.net/api/add_products",formData);
    setLoading("")
    setSuccess(response.data.success)
    } catch (error) {
      setError(error.message)
      
    }
  }
  return (
    <div className='row justify-content-center'>
      <div className='col-md-6 card shadow m-2' id='addForm'>
        <h1 id='h1s'>Add drink</h1><br/>
        {/* binding variables */}
        {loading}
        {error}
        {success}
        <nav>
          <Link to="/" className='btn btn-dark' id='links'>GET ALL PRODUCTS</Link><br/><br/>
        </nav>
        {/* add product form */}
        <form onSubmit={handleSubmit}>
          <input 
                type="text" 
                placeholder='Enter product name'
                className='form-control'
                onChange={(e)=>setProductName(e.target.value)}
                required/><br/>
          <textarea 
                placeholder='product description' 
                className='form-control'
                onChange={(e)=>setProductDescription(e.target.value)}
                required></textarea><br/>
          <input 
                type="number" 
                placeholder='Enter the cost' 
                className='form-control'
                onChange={(e)=>setProductCost(e.target.value)}
                required/><br/>
          <input 
                type="file" 
                placeholder='Choose photo' 
                className='form-control'
                onChange={(e)=>setProductPhoto(e.target.files[0])}
                required/><br/>

          <input 
                type='submit' 
                value='add product' 
                className='btn btn-info'/>
        </form>

      </div>
    </div>
  )
}

export default Adddrink