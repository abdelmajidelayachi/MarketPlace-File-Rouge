import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import {UserContext} from "../App"


const useAuth = ()=>{
 
  const {user}= useContext(UserContext)
  return user && user.loggedIn;
}

const ProtectRoute = () => {
  const location  = useLocation()
  const isAuth = useAuth();
  return isAuth? <Outlet/>:<Navigate to="/" replace state={{from :location}}/>;
}

export default ProtectRoute