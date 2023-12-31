import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Products from "./pages/Products";
import ProductPreview from "./components/ProductPreview";
import SingleProduct from "./pages/SingleProduct";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/home", element: <Home /> },
      {
        path: "/products",
        element: <Products />,
        children: [
          { path: "", element: <ProductList /> },
          { path: ":id", element: <SingleProduct /> },
        ],
      },
      {
        path: "/singleproduct",
        element: <SingleProduct />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
