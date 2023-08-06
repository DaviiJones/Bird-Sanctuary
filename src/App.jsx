import "./App.css";
import birdData from "./data/birds";
import Birds from "./components/Birds";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { useState } from "react";


function App () {

const [birds, setBirds] = useState(birdData)
const [cart, setCart] = useState([])
const [total, setTotal] = useState(0)

const handleAddToCart = (bird) => {
  setCart([...cart, bird])
  setTotal(total + bird.amount)
}

const handleRemoveFromCart = (birdId, birdAmount) => {
  const birdToRemoveIndex = cart.findIndex(bird => bird.id === birdId)
  const dupedCart = cart.slice()
  dupedCart.splice(birdToRemoveIndex, 1)
  setCart(dupedCart)
  setTotal(total - birdAmount)
}

const handleCheckout = () => {
  setCart([])
  setTotal(0)
}


  return (
    <div className="pageLayout">
      <Cart 
        cart={cart} 
        total={total} 
        handleRemoveFromCart={handleRemoveFromCart}/>
      <Checkout handleCheckout={handleCheckout}/>
      <Birds 
        birds={birds} 
        handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;
