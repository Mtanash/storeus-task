import React from "react";
import MainLayout from "../layouts/MainLayout";
import NoMatch from "../pages/NoMatch.page";

const Products = React.lazy(() => import("../pages/Products.page"));
const Home = React.lazy(() => import("../pages/Home.page"));
const Contact = React.lazy(() => import("../pages/Contact.page"));

const routes = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "*",
    Component: NoMatch,
  },
];

export default routes;
