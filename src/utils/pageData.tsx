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
    element: <LazyMainLayout />,
    children: [
      {
        title: "Home",
        path: "/",
        element: <Home />,
      },
      {
        title: 'Product Category',
        path: ":category",
        element: <ProductCategory />
      },
      {
        title: 'Product Detail',
        path: ":category/:productId",
        element: <ProductDetail />
      },
    ],
  },
  {
    title: 'Product Detail',
    path: ":category/:productId/checkout",
    element: <CheckoutForm />
  },
];