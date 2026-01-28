import { createBrowserRouter } from "react-router";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-cart",
        element: <MyCart />,
      },
      {
        path: "/product-detail/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
