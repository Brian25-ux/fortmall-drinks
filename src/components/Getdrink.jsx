import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Mycarousel from "./Mycarousel";


const Getdrink = () => {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const img_url = "https://brianhyrax.alwaysdata.net/static/images/";

    // FETCH PRODUCTS
    const getproducts = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await axios.get(
                "https://brianhyrax.alwaysdata.net/api/get_product_details"
            );

            const sortedProducts = response.data.sort(
                (a, b) => Number(a.product_cost) - Number(b.product_cost)
            );

            setProducts(sortedProducts);

        } catch (err) {
            setError("There was an error fetching products");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getproducts();
    }, []);

    //Adiing to cart
    const addToCart = (product) => {
        let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

        cart.push({
            id: Date.now(),
            product_name: product.product_name,
            product_cost: product.product_cost,
            product_photo: product.product_photo
        });

        sessionStorage.setItem("cart", JSON.stringify(cart));

        alert(`${product.product_name} added to cart`);
    };

    // the search feature
    const filteredProducts = products.filter((product) =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="row">

            <h3 className="mt-5">Available Drinks</h3>

            <Mycarousel /><br/>p



            {/*the search bar */}

            <div className="d-flex justify-content-center mb-4 col-12">
                <div className="w-50">
                    <input
                        type="text"
                        className="form-control form-control-lg text-center"
                        placeholder="Search drinks..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
                        {loading && <p>Please wait, we are retrieving the products...</p>}
            {error && <p className="text-danger">{error}</p>}

            {/* the products */}
            {filteredProducts.map((product) => (
                <div className="col-md-3 mb-4" key={product.id}>

                    <div className="card shadow card-margin h-100">

                        <img
                            className="product_img"
                            src={img_url + product.product_photo}
                            alt={product.product_name}
                        />

                        {/* FIXED ALIGNMENT SECTION */}
                        <div className="card-body d-flex flex-column">

                            <h5>{product.product_name}</h5>

                            <p className="text-muted">
                                <i>{product.product_description}</i>
                            </p>
                            <div className="mt-auto">

                                <b className="text-warning d-block mb-2">
                                    {product.product_cost} KES
                                </b>

                                <button
                                    className="btn btn-success w-100"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            ))}

        </div>
    );
};

export default Getdrink;