import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2>Privacy Policy</h2>
      <p><b> Date:</b> May 3, 2026</p>

      <p>
        Welcome to Fortmall Drinks. We respect your privacy and are committed
        to protecting your personal information.
      </p>

      <h5>Information We Collect</h5>
      <ul>
        <li>Name, email, phone number</li>
        <li>Delivery and billing address</li>
        <li>Payment information (processed securely)</li>
        <li>Age verification data</li>
      </ul>

      <h5>How We Use The  Information You Are Giving Us</h5>
      <ul>
        <li>To process orders</li>
        <li>To verify legal drinking age</li>
        <li>To improve our services</li>
      </ul>

      <h5>Contact</h5>
      <p>Email: support@fortmalldrinks.com</p>
    </div>
  );
};

export default PrivacyPolicy;