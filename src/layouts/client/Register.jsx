import axios from "axios";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.jpg";
import ErrorInput from "../../components/UI/ErrorInput";
import MessageModal from "../../components/UI/MessageModal";

function Register() {
  // useState for error message
  const [fNameError, setFNameError] = useState("");
  const [lNameError, setLNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // ref inputs
  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const checkbox = useRef("");

  const submitRegisterHandler = async (e) => {
    e.preventDefault();
    if (firstName.current.value.trim() === "") {
      setFNameError("First name is required");
    } else {
      setFNameError("");
    }
    if (lastName.current.value.trim() === "") {
      setLNameError("Last name is required");
    } else {
      setLNameError("");
    }
    if (email.current.value.trim() === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
    if (password.current.value.split("").length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else if (password.current.value.trim() === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
    if (password.current.value !== confirmPassword.current.value) {
      setConfirmPasswordError("Password does not match");
    } else if (confirmPassword.current.value.trim() === "") {
      setConfirmPasswordError("Confirm password is required");
    } else {
      setConfirmPasswordError("");
    }
    if (checkbox.current.checked === false) {
      setCheckboxError("Please accept the terms and conditions");
    } else {
      setCheckboxError("");
    }

    if (
      firstName.current.value.trim() !== "" &&
      lastName.current.value.trim() !== "" &&
      email.current.value.trim() !== "" &&
      password.current.value.trim() !== "" &&
      confirmPassword.current.value.trim() !== "" &&
      checkbox.current.checked === true && password.current.value === confirmPassword.current.value
    ) {
      const data = new FormData();
      data.append("first_name", firstName.current.value);
      data.append("last_name", lastName.current.value);
      data.append("email", email.current.value);
      data.append("password", password.current.value);

      try {
        const response = await axios.post(
          "http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/user/register",
          data
        );

        console.log(response.data);
        setFNameError(response.data.fNameError);
        setLNameError(response.data.lNameError);
        setEmailError(response.data.emailError);
        setPasswordError(response.data.passwordError);
        setConfirmPasswordError(response.data.confirmPasswordError);
        setSuccessMessage(response.data.success);
      } catch (error) {
        console.log(error);
      }
    }
  };

 const  onClickHandler = () => {
    setSuccessMessage("");
    window.location.href = "/sign-in";
  };

  return (
    <div>
      {successMessage!=='' && <MessageModal title="Success" className="bg-green-700" message={successMessage} onClick={onClickHandler}/>}
      <div className=" flex justify-center p-7 md:absolute  w-full ">
        <Link
          className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 w-28 h-10 whitespace-nowrap uppercase text-gray-900"
          to="/"
        >
          <img src={logo} alt="MShop" />
        </Link>
      </div>
      <div className="flex justify-center w-full items-center h-screen">
        <form
          className="bg-white shadow-3xl px-8 pt-6 pb-8 mb-4 md:mt-8 lg:w-1/4 md:w-1/3  w-full"
          onSubmit={submitRegisterHandler}
        >
          <div className="flex justify-between">
            <div className="font-bold text-lg">
              <h4>Create your account</h4>
            </div>
            <div>
              <Link to="/sign-in" className="block text-gray-700 text-lg mb-5">
                Sign In
              </Link>
            </div>
          </div>

          <div className="mb-3">
            <input
              ref={firstName}
              className={`shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                fNameError === "" ? "" : "border-red-500"
              }`}
              type="text"
              placeholder="First Name"
            />
            <ErrorInput message={fNameError} />
          </div>

          <div className="mb-3">
            <input
              ref={lastName}
              className={`shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                lNameError === "" ? "" : "border-red-500"
              }`}
              type="text"
              placeholder="last Name"
            />
            <ErrorInput message={lNameError} />
          </div>
          <div className="mb-3">
            <input
              ref={email}
              className={`shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                emailError === "" ? "" : "border-red-500"
              }`}
              type="email"
              placeholder="email"
            />
            <ErrorInput message={emailError} />
          </div>
          <div className="mb-3">
            <input
              ref={password}
              className={`shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                passwordError === "" ? "" : "border-red-500"
              }`}
              type="password"
              placeholder="Enter password"
            />
            <ErrorInput message={passwordError} />
          </div>
          <div className="mb-6">
            <input
              ref={confirmPassword}
              className={`shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                confirmPasswordError === "" ? "" : "border-red-500"
              }`}
              id="password"
              type="password"
              placeholder="Confirm password"
            />
            <ErrorInput message={confirmPasswordError} />
            <div className="mt-3">
              <div className="form-check flex items-center">
                <input
                  ref={checkbox}
                  className={`form-check-input h-4 w-4 border border-gray-300 ${
                    checkboxError === "" ? "" : "border-red-500"
                  }`}
                  type="checkbox"
                />
                <label
                  className="form-check-label inline-block text-sm text-gray-800 pl-2"
                  htmlFor="flexCheckDefault"
                >
                  I agree to uCanShop's Terms of Use.
                </label>
              </div>
              <ErrorInput message={checkboxError} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
      <div className="absolute md:bottom-0  flex justify-center p-3 md:text-sm text-xs  w-full">
        Copyright © 2022 uCanShop.com. All rights reserved.
      </div>
    </div>
  );
}

export default Register;
