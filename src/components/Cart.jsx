import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ FIX ADDED

const Cart = () => {

    const [cart, setCart] = useState([]);
    const navigate = useNavigate(); // ✅ FIX ADDED

    const img_url = "https://brianhyrax.alwaysdata.net/static/images/";

    // 🔄 Load cart
    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem("cart")) || [];
        setCart(data);
    }, []);

    // 💾 Sync helper
    const updateCart = (updated) => {
        setCart(updated);
        sessionStorage.setItem("cart", JSON.stringify(updated));
    };

    // 🗑 Remove item
    const removeItem = (id) => {
        const updated = cart.filter(item => item.id !== id);
        updateCart(updated);
    };

    // 💰 Total
    const total = cart.reduce(
        (sum, item) => sum + Number(item.product_cost),
        0
    );

    return (
        <div className="container mt-4">

            <h2 className="mb-4">My Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <div className="row">

                        {cart.map((item) => (
                            <div className="col-md-4 mb-3" key={item.id}>
                                <div className="card shadow p-2">

                                    {/* IMAGE */}
                                    <img
                                        src={img_url + item.product_photo}
                                        alt={item.product_name}
                                        style={{
                                            height: "180px",
                                            objectFit: "cover"
                                        }}
                                        className="card-img-top"
                                    />

                                    <div className="card-body">

                                        {/* NAME */}
                                        <h5>{item.product_name}</h5>

                                        {/* PRICE */}
                                        <p className="text-warning fw-bold">
                                            {item.product_cost} KES
                                        </p>

                                        {/* REMOVE */}
                                        <button
                                            className="btn btn-danger w-100"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                    {/* TOTAL + CHECKOUT */}
                    <div className="mt-4">

                        <h4>
                            Total: <span className="text-success">{total} KES</span>
                        </h4>

                        {/* MPESA BUTTON FIXED */}
                        <button
                            className="btn btn-success w-100 mt-3"
                            onClick={() => navigate("/makepayment", { state: { cart } })}
                        >
                            Buy Now (Pay with M-Pesa)
                        </button>

                    </div>
                </>
            )}

        </div>
    );
};

export default Cart;