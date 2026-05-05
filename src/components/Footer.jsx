import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer pt-5 pb-3 mt-5 bg-dark text-light">

      <div className="container">
        <div className="row">

          {/* Fortmall Description */}
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
              Bulk supply, and special discounts for events and businesses.
            </p>
            <ul className="list-unstyled">
              <li>* Event Supply</li>
              <li>* Wholesale Orders</li>
              <li>* 24/7 Customer Support</li>
            </ul>
          </div>

          {/* Contact us */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p>Email: support@fortmall.com</p>
            <p>Phone: +254 782312 501</p>
            <p>Location: Nairobi, Kenya</p>

          
           {/* FOLLOW US SECTION */}
              <h5 className="mt-3">Follow us</h5>

              <div className="d-flex justify-content-center gap-3 mt-2">

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light fs-4"
                >
                  <FaFacebook />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light fs-4"
                >
                  <FaInstagram />
                </a>

                {/* Twitter*/}
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light fs-4"
                >
                  <FaTwitter />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/254782312501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light fs-4"
                >
                  <FaWhatsapp />
                </a>

              </div>

            </div>

          </div>

        </div>

        <hr className="border-light" />

        {/* Privacy link */}
        <div className="text-center mb-2">
          <a href="/privacy-policy" className="text-light me-3">
            Privacy Policy
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Fortmall Drinks. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;