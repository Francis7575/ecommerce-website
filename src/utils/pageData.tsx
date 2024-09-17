import { IRouterType } from '../types/types';
import { lazy } from "react";

const LazyMainLayout = lazy(() => import("../components/Layout"));
const Home = lazy(() => import("../pages/Home"));
const ProductCategory = lazy(() => import("../pages/ProductCategory"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const CheckoutForm = lazy(() => import("../pages/checkout/CheckoutForm"));

export const PAGE_DATA: IRouterType[] = [
  {
    title: "Layout",
    path: "/",
    element: <LazyMainLayout />,
    children: [
      {
        title: "Home",
        path: "",
        element: <Home />,
      },
      {
        title: "Product Category",
        path: ":category",
        element: <ProductCategory />,
        children: [
          {
            title: "Product Detail",
            path: ":productId",
            element: <ProductDetail />,
          },
          {
            title: "Checkout",
            path: ":productId/checkout",
            element: <CheckoutForm />,
          },
        ],
      },
    ],
  },
];
