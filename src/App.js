import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// WhatsApp icon
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

      {/* ✅ FLOATING WHATSAPP BUTTON (TOP RIGHT) */}
      <a
        href="https://wa.me/254729611561?text=Hello%20Fortmall%20Drinks%2C%20I%20want%20to%20place%20an%20order"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          top: "15px",
          right: "15px",
          backgroundColor: "#25D366",
          color: "white",
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          zIndex: 1000,
          textDecoration: "none"
        }}
      >
        <FaWhatsapp size={28} />
      </a>

      <div className='App-header'>
        <h1 className='text-white'>Fortmall Drinks</h1>
      </div>

      <br />

      <nav>
        &nbsp;&nbsp;&nbsp;

        {!isAuthenticated ? (
          <>
            <Link to="/signup" className='btn btn-outline-primary ms-2'>
              Sign up
            </Link>

            &nbsp;&nbsp;&nbsp;

            <Link to="/signin" className='btn btn-outline-primary ms-2'>
              Sign in
            </Link>
          </>
        ) : (
          <>
            <Link to="/getdrink" className='btn btn-outline-primary ms-2'>
              Get drink
            </Link>

            &nbsp;&nbsp;&nbsp;

            <Link to="/adddrink" className='btn btn-outline-primary ms-2'>
              Add drink
            </Link>

            &nbsp;&nbsp;&nbsp;

            <Link to="/aboutus" className='btn btn-outline-primary ms-2'>
              About us
            </Link>

            &nbsp;&nbsp;&nbsp;

            <Link
              to="/cart"
              className='btn btn-outline-primary ms-2 position-relative'
            >
              Cart

              {cartCount > 0 && (
                <span
                  className="badge bg-danger"
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                    borderRadius: "50%"
                  }}
                >
                  {cartCount}
                </span>
              )}
            </Link>

            &nbsp;&nbsp;&nbsp;

            <button onClick={logout} className='btn btn-primary ms-2'>
              Logout
            </button>
          </>
        )}
      </nav>

      <Routes>

        <Route
          path='/'
          element={
            isAuthenticated
              ? <Navigate to="/getdrink" />
              : <Navigate to="/signin" />
          }
        />

        <Route path='/signup' element={<Signup setUser={setUser} />} />
        <Route path='/signin' element={<Signin setUser={setUser} />} />

        <Route
          path='/getdrink'
          element={isAuthenticated ? <Getdrink /> : <Navigate to="/signin" />}
        />

        <Route
          path='/adddrink'
          element={isAuthenticated ? <Adddrink /> : <Navigate to="/signin" />}
        />

        <Route
          path='/makepayment'
          element={isAuthenticated ? <Mpesapayment /> : <Navigate to="/signin" />}
        />

        <Route
          path='/cart'
          element={isAuthenticated ? <Cart /> : <Navigate to="/signin" />}
        />

        <Route
          path='/aboutus'
          element={isAuthenticated ? <Aboutus /> : <Navigate to="/signin" />}
        />

        <Route
          path='/privacy-policy'
          element={<PrivacyPolicy />}
        />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;