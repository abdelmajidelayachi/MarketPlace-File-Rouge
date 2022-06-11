import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav from "../../components/clients/Nav";
import ProfileInformation from "../../components/clients/ProfileInformation";
import Footer from "../../layouts/Footer";
import ChangePassword from "./ChangePassword";

const Profile = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [current, setCurrent] = useState(window.location.href.split("=")[1] || "personal-information");
  const location = useLocation();
  
  useEffect(() => {
    setCurrent(window.location.href.split("=")[1]);
  }
  , [location]);
  useEffect(() => {
    if (user === null) {
      navigate("/sign-in?from=profile");
    }
  }, [navigate]);

  return (
    <div>
      <div className=" max-w-screen-xl m-auto ">
        <Nav user={user} active="home" />

      </div>
      <div className="flex justify-between md:flex-row flex-col md:w-10/12 mt-7 mx-auto ">
    <div className="flex flex-col items-center justify-center w-full md:w-1/3 md:mt-6 md:border h-fit">
      <div className="py-8 "> 
        <img  src={require(`../../assets/images/profiles/${user.profile_photo_path}`)} alt="profile" className="rounded-full w-48 h-48"/>
      </div>
      <div className="flex flex-col justify-center w-10/12 ">
        <h1 className="text-gray-900 text-xl title-font font-medium mb-5">
          {user.role}
        </h1>
        <h1 className="text-gray-900 text-xl title-font font-medium mb-3">
          {user.first_name+" "+user.last_name}
        </h1>
        <p className="text-gray-900 md:text-lg text-sm text-center mb-5">
          {user.email}
        </p>

      </div>
      
    </div>
    <div className="flex flex-col w-full md:w-2/3 px-8 mt-4">
      <div className="flex gap-10 ">
        <div className="md:text-xl text-lg text-gray-800">
          <Link to="/profile?current=personal-information" className={` ${current !== "change-password"? "border-b-2 border-mainBlue text-mainBlue": "text-gray-800 hover:border-b-2 hover:border-mainBlue hover:text-mainBlue"}`}>
            Personal Information
          </Link>
        </div>
        
        <div className="md:text-xl text-lg text-gray-800">
          <Link to="/profile?current=change-password" className={` ${current === "change-password"? "border-b-2 border-mainBlue text-mainBlue": "text-gray-800 hover:border-b-2 hover:border-mainBlue hover:text-mainBlue"}`}>
            Change password
          </Link>
        </div>
      </div>
      {current === "change-password" ? <ChangePassword/>:<ProfileInformation updateInfo={(user)=>{setUser(user)}} />}

    </div>
  </div>
        <Footer />
    </div>
  );
};

export default Profile;
