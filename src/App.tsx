import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const [isAdmin, setIsAdmin] = useState<boolean>()
  useEffect(() => {
    
  },[])
  return (
    <div className="App"><ToastContainer />
      
      <Router>
      
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
