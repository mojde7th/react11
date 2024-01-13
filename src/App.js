import { useState } from "react";
import Navbar from "./components/navbar";
import ProductsPage from "./pages/products";
import Products from "./pages/products";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorMoj from "./pages/ErrorMoj";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <div className="w-[100%] relative">
          <Navbar />
          <Outlet />
        </div>
      ),
      path: "/",
      errorElement: <ErrorMoj />,
      children: [
        {
          element: <ErrorMoj />,
          path: "*",
        },
        {
          element: <ProductsPage />,
          path: "react11/products",
        },
        {
          element: <div>Home Page</div>,
          path: "react11/Home",
        },
        {
          element: <div></div>,
          path: "react11",
        },
        { element: <div>About</div>, path: "react11/about" },
        {
          element: <ProductDetail />,
          path: "/react11/products/:productId",
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
