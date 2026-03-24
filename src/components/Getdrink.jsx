import { useState, useEffect } from "react"; // for state management
import axios from "axios"; // For API Access
import { Link, useNavigate } from "react-router-dom"; // For link to other component
import Mycarousel from "./Mycarousel";

const Getdrink = () => {

    // Initialize Hooks
    const [products, setProducts] = useState([]);  // Default to empty array instead of a string
    const [loading, setLoading] = useState(""); // For loading message
    const [error, setError] = useState(""); // error message hook
    

    const navigate = useNavigate()
    // Specify image location URL
    const img_url = "https://brianhyrax.alwaysdata.net/static/images/"
    
    const getproducts = async() => {
        setLoading("Please wait, We are retrieving the products .."); // Set loading message when fetching starts
        try {
            const response = await axios.get("https://brianhyrax.alwaysdata.net/api/get_product_details")
            setProducts(response.data)
            setLoading("")
        }
        catch(error) {
            setLoading("")
            setError("There was an Error")    
        }
    }

    // Call getproducts on Use Effect
    useEffect(() => {
       getproducts()
    }, []); // empty dependency array ensures this runs only once when the component mounts

    return (
        <div className="row">
            <h3 className="mt-5">Available Drinks</h3>
            <Mycarousel/>

            {/* Bind Error Messages */}
            {loading && <p>{loading}</p>}
            {error && <p className="text-danger">{error}</p>}

           
            {/* Map over products and display them */}
            {products.map((product) => (
                <div className="col-md-3 justify-content-center mb-4" key={product.id}>
                    {/* Card with equal size */}
                    <div className="card shadow card-margin">
                        <img 
                            className="product_img mt-4"
                            src={img_url + product.product_photo} 
                            alt={product.product_name}
                        />
                        <div className="card-body">
                            <h5 className="mt-2">{product.product_name}</h5>
                            <p className="text-muted">{product.product_description}</p>
                            <b className="text-warning">{product.product_cost} KES</b> <br />
                           <button 
            className="btn btn-dark mt-2 w-100"
            onClick={() => navigate('/makepayment', { state: { product } })}>
                        Purchase Now
            </button>
                        </div>
                    </div>
                </div>
            ))}        
        </div>
    );
}

export default Getdrink;