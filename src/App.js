// route
import {  Route, Routes } from "react-router-dom";
// client views
import Home from "./pages/client/Home";
import SignIn from "./pages/client/SignIn";
import Register from "./pages/client/Register";
import New from "./pages/client/New";
import Error from "./pages/Error";
import TopSeller from "./pages/client/TopSeller";
import Basket from "./pages/client/Basket";
import ShowProduct from "./pages/client/ShowProduct";
import CheckOut from "./pages/client/CheckOut";
import PlaceOrder from "./pages/client/PlaceOrder";
import Category from './pages/client/Category';
import Search from "./pages/client/Search";
import Profile from "./pages/client/Profile";
import Store from "./pages/client/Store";
// import admin views
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";
import AddShop from "./pages/admin/AddShop";
import Transactions from "./pages/admin/Transactions";

//style additional
import './App.css'
// aos animation
import AOS from 'aos'
import 'aos/dist/aos.css';
import WishList from "./pages/client/WishList";
AOS.init();

function App() {
  return (
    <div className="">
      <Routes>

        {/* landing page */}
        <Route index path="/" element={<Home />} />

        {/* auth page */}
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<Profile/>} />

          {/* products pages */}
        <Route path="/new-products" element={<New />} />
        <Route path="//top-sells" element={<TopSeller />} />
        <Route path="/card" element={<Basket />} />
        <Route path = "place-order" element={<PlaceOrder/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path='//wishlist' element={<WishList/>} />

        {/* search pages */}
        <Route path="/show-product/:id" element = {<ShowProduct/>}/>
        <Route path="/category/:category" element = {<Category/>}/>
        <Route path="/search/:search" element = {<Search/>}/>
        <Route path="/store/:user" element = {<Store/>}/>

        {/* admin pages */}
        <Route path="/add-your-own-shop" element = {<AddShop/>}/>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route path="/dashboard/products" element={<Products />} />
        <Route path="/dashboard/orders" element={<Orders />} />
        <Route path="/dashboard/transactions" element={<Transactions />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
