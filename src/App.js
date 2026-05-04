import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";

import Signin from './components/Signin';
import Signup from './components/Signup';
import Adddrink from './components/Adddrink';
import Getdrink from './components/Getdrink';
import Mpesapayment from './components/Mpesapayment';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Cart from './components/Cart';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = sessionStorage.getItem("user");

    if (data && data !== "undefined" && data !== "null") {
      setUser(JSON.parse(data));
    }

    setLoading(false);
  }, []);

  const isAuthenticated = !!(user && user.email);

  const logout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
  };

  if (loading) return null;

  return (
    <Router>
      <MainApp
        user={user}
        setUser={setUser}
        isAuthenticated={isAuthenticated}
        logout={logout}
      />
    </Router>
  );
}

function MainApp({ user, setUser, isAuthenticated, logout }) {

  const cartCount = JSON.parse(sessionStorage.getItem("cart"))?.length || 0;

  return (
    <div className="App">
      <a
        href="https://wa.me/254729611561"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          top: "15px",
          right: "15px",
          backgroundColor: "#64fd9cff",
          color: "white",
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 10px rgba(10, 2, 2, 0.3)",
          zIndex: 1000,
        }}
      >
        <FaWhatsapp size={24} />
      </a>

      {/*  HEADER (matches footer style) */}
      <div className="App-header">
        <h2 className="m-0">Fortmall Drinks</h2>
      </div>

      {/* the navbar */}
      <nav className="navbar navbar-expand-lg navbar-info bg-info px-3">

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <div className="navbar-nav ms-auto d-flex flex-column flex-lg-row align-items-start align-items-lg-center">

            {!isAuthenticated ? (
              <>
                <Link to="/signup" className="btn btn-outline-light m-1">
                  Sign up
                </Link>

                <Link to="/signin" className="btn btn-outline-light m-1">
                  Sign in
                </Link>
              </>
            ) : (
              <>
                <Link to="/getdrink" className="btn btn-outline-light m-1">
                  Get drink
                </Link>

                <Link to="/adddrink" className="btn btn-outline-light m-1">
                  Add drink
                </Link>

                <Link to="/aboutus" className="btn btn-outline-light m-1">
                  About us
                </Link>

                <Link
                  to="/cart"
                  className="btn btn-outline-light m-1 position-relative"
                >
                  Cart

                  {cartCount > 0 && (
                    <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                      {cartCount}
                    </span>
                  )}
                </Link>

                <button onClick={logout} className="btn btn-warning m-1">
                  Logout
                </button>
              </>
            )}

          </div>
        </div>
      </nav>

      {/* ROUTES */}
      <Routes>

        <Route
          path="/"
          element={
            isAuthenticated
              ? <Navigate to="/getdrink" />
              : <Navigate to="/signin" />
          }
        />

        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/signin" element={<Signin setUser={setUser} />} />

        <Route
          path="/getdrink"
          element={isAuthenticated ? <Getdrink /> : <Navigate to="/signin" />}
        />

        <Route
          path="/adddrink"
          element={isAuthenticated ? <Adddrink /> : <Navigate to="/signin" />}
        />

        <Route
          path="/makepayment"
          element={isAuthenticated ? <Mpesapayment /> : <Navigate to="/signin" />}
        />

        <Route
          path="/cart"
          element={isAuthenticated ? <Cart /> : <Navigate to="/signin" />}
        />

        <Route
          path="/aboutus"
          element={isAuthenticated ? <Aboutus /> : <Navigate to="/signin" />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

      </Routes>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;