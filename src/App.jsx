import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Layout from "./layouts/Layuot/Layuot.jsx";
import Home from "./pages/Home/Home.jsx";
import Calculater from "./pages/Calculater/Calculater.jsx";
import Components from "./pages/Components/Components.jsx";
import Animation from "./pages/Animation/Animation.jsx";
import Todo from "./pages/Todo/Todo.jsx";
import Products from "./pages/Products/Products.jsx";
import Carts from "./pages/Carts/Carts.jsx";
import Login from "./pages/Login/Login.jsx";

import "./App.css";

import { fetchProducts } from "./data/products.jsx";

function App() {
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => setProducts(fetchProducts()), []);
  useEffect(() => console.log(products), [products]);

  if (token === "") {
    return <Login setToken={setToken} setRole={setRole} />
  } else {
    return (
      <div className="app-container">
        <HashRouter>
          <Routes>
            <Route element={<Layout products={products} carts={carts} setToken={setToken} role={role}/>}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/calculater" element={<Calculater />} />
              <Route path="/components" element={<Components />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/todo" element={<Todo />} />
              <Route
                path="/products"
                element={
                  <Products
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                  />
                }
              />
              <Route
                path="/carts"
                element={<Carts carts={carts} setCarts={setCarts} />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
