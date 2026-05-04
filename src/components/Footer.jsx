import React from 'react';

const Footer = () => {
  return (
    <footer className="footer pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/*Fortmal Description */}
          <div className="col-md-4 mb-4">
            <h5>Fortmall Drinks</h5>
            <p>
              Your go-to destination for refreshing beverages! We offer a wide
              range of soft drinks, juices, energy drinks, and more — delivered
              fresh and cold right to your doorstep.
            </p>
          </div>

          {/* Services */}
          <div className="col-md-4 mb-4">
            <h5>Our Services</h5>
            <p>
              We provide fast and reliable delivery of your favorite drinks,
              bulk supply for events and businesses, and special discounts on
              large orders. Whether it's a party, office, or home, we've got you covered.
            </p>
            <ul className="list">
              <li>* Event Supply</li>
              <li>* Wholesale Orders</li>
              <li>* 24/7 Customer Support</li>
            </ul>
          </div>

          {/* Contact us */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p>Email: support@fortmall.com</p>
            <p>Phone: +254 782312 501 </p>
            <p>Location: Nairobi, Kenya</p>

            <h6 className="mt-3">Follow Us</h6>
            <div>
          </div>
        </div>
      </div>

        <hr className="border-light" />

        {/* privacy link */}
        <div className="text-center mb-2">
          <a href="/privacy-policy" className="text-light me-3">
            Privacy Policy
          </a>
        </div>

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