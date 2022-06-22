import React from "react";
// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Home from  "../pages/client/Home";
import New from "../pages/client/New";
import TopSeller from "../pages/client/TopSeller";
import ShowProduct from "../pages/client/ShowProduct";
import Category from "../pages/client/Category";
import SignIn from "../pages/client/SignIn";
import Register from "../pages/client/Register";
import Profile from "../pages/client/Profile";
import Basket from "../pages/client/Basket";
import CheckOut from "../pages/client/CheckOut";
import PlaceOrder from "../pages/client/PlaceOrder";
import Search from "../pages/client/Search";
import Store from "../pages/client/Store";
import AddShop from "../pages/admin/AddShop";
import Div from "../components/UI/Div";


const ClientsRoutes = () => {
  return (
    <Div>
      <Route index path="/" element={<Home />} />
        <Route path="/new-products" element={<New />} />
        <Route path="/top-seller" element={<TopSeller />} />
        <Route path="/show-product/:id" element={<ShowProduct />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/card" element={<Basket />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="place-order" element={<PlaceOrder />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/store/:user" element={<Store />} />
        <Route path="/add-your-own-shop" element={<AddShop />} />
    </Div>
  );
};

export default ClientsRoutes;
