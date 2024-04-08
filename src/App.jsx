import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Cart from './pages/Cart/Cart';
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Menu from "./pages/Menu/Menu"
import Footer from './components/Footer/Footer';



const App = () => {
  return (
    <>
    <div className='app'>
      <NavBar />
      <Routes>
       <Route path='/' element={ <Home />} />
       <Route path='/menu' element={ <Menu />} />
       <Route path='/cart' element={ <Cart />} />
       <Route path='order' element={<PlaceOrder />} />
      </Routes>
  
    </div>
    <Footer />
    </>
  )
}

export default App