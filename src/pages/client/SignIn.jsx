import axios from "axios";
import React,{useState,useRef, useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logo.jpg";
import ErrorInput from "../../components/UI/ErrorInput";

function SignIn() {
  // useState for error message
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loggedIn,setLoggedIn] = useState(false);

  const navigate =useNavigate();
  const location = useLocation();
  // ref inputs
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      setLoggedIn(true);
      console.log(location)
      navigate('location')
    }

  }, [])
  
  const email = useRef("");
  const password = useRef("");

  const onSubmitLoginHandler = async (e) => {
    e.preventDefault();
    if (email.current.value.trim() === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
    if (password.current.value.trim() === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
    if (email.current.value.trim() !== "" && password.current.value.trim() !== "") {
      const data = new FormData();
      data.append("email", email.current.value);
      data.append("password", password.current.value);
    try {
      const response = await axios.post("http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/user/login",data)
      console.log(response.data);
      if(response.data !== '' )
      {
        setLoggedIn(true);
        localStorage.setItem('user',JSON.stringify(response.data.user));
        window.location.href = "/";
      }else{
        setEmailError(response.data.emailError);
        setPasswordError(response.data.passwordError);
      }



    } catch (err) {
      console.log(err);
    }
  }
  };

  
  return (
    <div>
      <div className="flex justify-center p-7 absolute w-full ">
        <Link
          className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 w-28 h-10 whitespace-nowrap uppercase text-gray-900"
          to="/"
        >
          <img src={logo} alt="MShop" />
        </Link>
      </div>
      <div className="flex justify-center w-full items-center h-screen">
        <form onSubmit={onSubmitLoginHandler} className="bg-white shadow-3xl px-8 pt-6 pb-8 mb-4 lg:w-1/4 md:w-1/3  w-full">
          <Link
            to="/sign in"
            className="block text-gray-700 text-lg font-bold mb-5"
          >
            Sign In
          </Link>
          <div className="mb-4">
            <input
              className={`shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                emailError === "" ? "" : "border-red-500"
              }`}
              type="email"
              placeholder="email" ref={email}
            />
             <ErrorInput message={emailError} />
          </div>
          <div className="mb-6">
            <input ref={password}
              className={`shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                passwordError === "" ? "" : "border-red-500"
              }`}
              id="password"
              type="password"
              placeholder="******************"
            />
            <ErrorInput message={passwordError} />
            <p className="text-gray-400 text-xs italic underline p-0.5">
              Forgot your password?
            </p>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-between">
            <Link to="/register"
              className="bg-zinc-100 hover:bg-zinc-300 mt-5 text-stone-500  text-center font-bold py-2 px-4 border border-gray-600  focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Create a new account
            </Link>
          </div>
          <div className="flex justify-center w-full mt-4 ">
            <span className="border-b border-gray-400 flex mt-3 items-center w-full"></span>
            <span className="absolute bg-white px-3 mb-0.5"> OR</span>
          </div>
          <div className="flex justify-center mt-5">
            <svg className="bg-white border rounded-full p-1 shadow-xl"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="42px"
              height="42px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
          </div>
        </form>
      </div>
      <div className="absolute bottom-0  flex justify-center p-3 md:text-sm text-xs  w-full">
      Copyright © 2022 uCanShop.com. All rights reserved.
      </div>
    </div>
  );
}

export default SignIn;
