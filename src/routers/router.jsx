import { createBrowserRouter } from "react-router";
import App from "../App";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/my-cart",
    element: <MyCart />,
  },
  {
    path: "/product-detail",
    element: <ProductDetail />,
  },
]);

export default router;
