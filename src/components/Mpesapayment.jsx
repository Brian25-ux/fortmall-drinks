import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Mpesapayment = () => {

  const location = useLocation();
  const navigate = useNavigate();

  // the cart
  const [cart, setCart] = useState(location.state?.cart || []);

  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const img_url = "https://brianhyrax.alwaysdata.net/static/images/";

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);

    setCart(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  //  TOTAL amount
  const totalAmount = cart.reduce(
    (sum, item) => sum + Number(item.product_cost),
    0
  );

  //Handling the mpesa payment
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("Please wait as we process the transaction...");
    setError("");

    try {
      const formData = new FormData();
      formData.append("phone", phone);
      formData.append("amount", totalAmount);

      const response = await axios.post(
        "https://brianhyrax.alwaysdata.net/api/mpesa_payment",
        formData
      );

      setMessage(response.data.message || "Payment initiated successfully");
    } catch (error) {
      setError("Payment failed. Try again.");
    }
  };

  //handleing the empty cart
  if (cart.length === 0) {
    return (
      <div className="container mt-4 text-center">
        <h3>No items found for payment</h3>

        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/getdrink")}
        >
          Go back to Getdrink
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">

      <h1 id='h1mpesa' className="text-center mb-4">
        LIPA NA MPESA
      </h1>

      {/*the products card*/}
      <div className="row">

        {cart.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>

            <div className="card shadow h-100 p-2">

              <img
                className="product_img card-img-top"
                src={img_url + item.product_photo}
                alt={item.product_name}
                style={{ height: "180px", objectFit: "cover" }}
              />

              <div className="card-body text-center">

                <h5>{item.product_name}</h5>

                <p className="text-warning fw-bold">
                  KES {item.product_cost}
                </p>

                {/*the remove button */}
                <button
                  className="btn btn-danger w-100 mt-2"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* total amount to be paid */}
      <div className="text-center mt-3">
        <h4 className="text-success">
          Total: KES {totalAmount}
        </h4>
      </div>

      {/* STATUS MESSAGES */}
      <div className="text-center mt-2">
        <p className="text-info">{message}</p>
        <p className="text-danger">{error}</p>
      </div>

      {/* the payment form */}
      <div className="row justify-content-center mt-3">

        <div className="col-md-6">

          <form onSubmit={handleSubmit}>

            <label>Phone number</label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />

            <br />

            <button className="btn btn-info w-100">
              Pay Now
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Mpesapayment;