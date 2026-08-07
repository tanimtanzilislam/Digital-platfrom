
import './App.css'
import Divider from './components/Divider/Divider'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import ProductSection from './components/ProductSection/ProductSection'
import {useState} from 'react'
//app.jsx

function App() {
  const [cart,setCart]=useState([]);
 

  return (
    <>
     <Navbar cart={cart}/>
     <Hero/>
     <Divider/>
     <ProductSection cart={cart} setCart={setCart}/>
     </>
   
  )
}

export default App
