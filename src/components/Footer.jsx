import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Column 1: Brand Description */}
          <div className="col-md-4 mb-4">
            <h5>Fortmall Drinks</h5>
            <p>
              Your go-to destination for refreshing beverages! We offer a wide
              range of soft drinks, juices, energy drinks, and more — delivered
              fresh and cold right to your doorstep.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="col-md-4 mb-4">
            <h5>Our Services</h5>
            <p>
              We provide fast and reliable delivery of your favorite drinks,
              bulk supply for events and businesses, and special discounts on
              large orders. Whether it's a party, office, or home, we've got you covered.
            </p>
            <ul className="list-unstyled">
              <li>✔ Home Delivery</li>
              <li>✔ Event Supply</li>
              <li>✔ Wholesale Orders</li>
              <li>✔ 24/7 Customer Support</li>
            </ul>
          </div>

          {/* Column 3: Contact + Social Media */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p>Email: support@fortmall.com</p>
            <p>Phone: +254 700 123 456</p>
            <p>Location: Nairobi, Kenya</p>

            <h6 className="mt-3">Follow Us</h6>
            <div>
              <a href="#" className="text-light me-3">Facebook</a>
              <a href="#" className="text-light me-3">Instagram</a>
              <a href="#" className="text-light me-3">Twitter</a>
              <a href="#" className="text-light">TikTok</a>
            </div>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Fortmall Drinks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;