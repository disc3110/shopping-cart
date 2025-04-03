import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data));
  },[])

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
  
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      < Navbar />
      <main className="flex-1 bg-amber-400">
        <Outlet context={{ products, cart, addToCart }} />
      </main>
    </div>
  );
}
