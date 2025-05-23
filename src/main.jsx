import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts.jsx";
import Products from "./components/Products.jsx";
import About from "./components/About.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Home from "./components/Home.jsx";
import Counter from "./components/Counter.jsx";
import QueryProvider from "./providers/QueryProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/blog" element={<Posts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  </StrictMode>
);
