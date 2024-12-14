import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute";
// import Home from "./components/Home";
// import Product from "./components/Product";
// import Cart from "./components/Cart";
// import ProductDetails from "./components/ProductDetails";

const Home = lazy(() => import("./components/Home"));
const Product = lazy(() => import("./components/Product"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const Cart = lazy(() => import("./components/Cart"));

function App() {
  const isAuthenticated = false;
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetails />} />

          <Route
            path="/cart"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
