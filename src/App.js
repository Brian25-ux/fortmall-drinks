import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Adddrink from './components/Adddrink';
import Getdrink from './components/Getdrink';
import Mpesapayment from './components/Mpesapayment';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <div className='App-header'>
        <h1 className='text-info'>Welcome to Fortmall Drinks</h1>
      </div><br />
      {/* routes */}
       <nav>&nbsp;&nbsp;&nbsp;
        <Link to= "/signup"className='btn btn-outline-primary ms -2'>Sign up</Link>&nbsp;&nbsp;&nbsp;
        <Link to= "/signin"className='btn btn-outline-primary ms -2'>Sign in</Link>&nbsp;&nbsp;&nbsp;
        <Link to= "/"className='btn btn-outline-primary ms -2'>Get drink</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/Adddrink"className='btn btn-outline-primary ms -2'>Add drink</Link>&nbsp;&nbsp;&nbsp;
        

      </nav> 
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/adddrink' element={<Adddrink/>}/>
        <Route path='/' element={<Getdrink/>}/>
        <Route path='/makepayment' element={<Mpesapayment/>}/>

      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
