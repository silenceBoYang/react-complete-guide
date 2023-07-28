import Basket from "../components/basket/Basket";
import Footer from "../components/common/Footer";
import Navigation from "../components/common/Navigation";
import * as ROUTES from "../constants/routes";
import { createBrowserHistory } from "history";
import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Search from "../views/search/index";
// import * as view from "../views";
// import AdminRoute from "./AdminRoute";
// import ClientRoute from "./ClientRoute";
// import PublicRoute from "./PublicRoute";
// Revert back to history v4.10.0 because
// v5.0 breaks navigation
export const history = createBrowserHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <>
      <Navigation />
    </>
  </BrowserRouter>
);

export default AppRouter;
