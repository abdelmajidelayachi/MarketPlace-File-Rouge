import React from "react";
// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";
import Orders from "../pages/admin/Orders";
import Transactions from "../pages/admin/Transactions";
import Error from "../pages/Error";
import Div from "../components/UI/Div";

const AdminRoutes = () => {
  return (
    <Div>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/products" element={<Products />} />
      <Route path="/dashboard/orders" element={<Orders />} />
      <Route path="/dashboard/transactions" element={<Transactions />} />
    </Div>
  );
};

export default AdminRoutes;
