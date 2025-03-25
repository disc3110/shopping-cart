import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function App() {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data));
  },[])

  return (
    <>
      < Navbar />
      <Outlet context={{ products }} />
    </>
  );
}
