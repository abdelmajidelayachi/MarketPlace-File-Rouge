import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputField } from "../admin/InputField";
import axios from "axios";
import PreviewImage from "../admin/PreviewImage";

const ProfileInformation = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [profileUpdate, setProfileUpdate] = useState(false);
  const [error, setError] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const sendProfileInformation = async (data) => {
    const response = await axios.post(
      "http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/user/update_profile",
      data,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data);
    if (response.data.success === true) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setUser(response.data.user);
      setProfileUpdate(true);
      props.updateInfo(response.data.user);
    } else {
      setProfileUpdate(false);
      setError(true);
    }
    setResponseMessage(response.data.message);
  };
  const submitEditProfile = (values) => {
    console.log(values);
    const data = new FormData();
    data.append("first_name", values.first_name);
    data.append("last_name", values.last_name);
    data.append("email", values.email);
    data.append("image", values.profile_picture?values.profile_picture:user.profile_photo_path);
    data.append("id", user.id);
    sendProfileInformation(data);
  };
  return (
    <div className="py-8">
      <h1 className="text-lg font-semibold flex mb-3">Edit Profile</h1>
      {profileUpdate ? (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">
            Your profile has been updated.
          </span>
          <span
            onClick={() => setProfileUpdate(false)}
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
          >
            <svg
              className="fill-current h-6 w-6 text-green-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      ) : (
        ""
      )}
      {error ? (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">{responseMessage}</span>
          <span
            onClick={() => setError(false)}
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
          >
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      ) : (
        ""
      )}

      <Formik
        initialValues={{
          first_name: user.first_name,
          last_name: user.last_name,
          profile_picture: "",
          email: user.email,
        }}
        validationSchema={Yup.object({
          first_name: Yup.string().required("First name is required"),
          last_name: Yup.string().required("Last name is required"),
          email: Yup.string()
            .required("Email is required")
            .email("Email is invalid"),
        })}
        onSubmit={submitEditProfile}
      >
        {(formik) => (
          <Form>
            <div className="w-44 text-center my-6 ">
              <div className="relative w-64">
                {formik.values.profile_picture===""&&<img
                  className="w-44 h-44 rounded-full "
                  src={require(`../../assets/images/profiles/${user.profile_photo_path}`)}
                  alt=""
                />}
                  {formik.values.profile_picture!==''&&<PreviewImage file={formik.values.profile_picture} className="w-44 h-44 rounded-full" /> }
                <div className="w-44 h-44 group hover:bg-gray-200 opacity-60 rounded-full absolute flex top-0 justify-center items-center cursor-pointer transition duration-500">
                  <img
                    className="hidden group-hover:block w-8"
                    src="https://www.svgrepo.com/show/33565/upload.svg"
                    alt=""
                  />
                  <input type="file"
                  name="profile_picture"
                   onChange={(event) => {
                    formik.setFieldValue("profile_picture", event.currentTarget.files[0]);
            }}
                  className="opacity-0 flex w-40 h-40  absolute" />
                </div>
              </div>
            </div>
            <div className="my-4">
              <label htmlFor="first_name">First Name</label>
              <InputField
                isInput="true"
                type="text"
                className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                name="first_name"
                placeholder="First Name"
              />
            </div>
            <div className="my-4">
              <label htmlFor="last_name">Last Name</label>
              <InputField
                isInput="true"
                type="text"
                className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                name="last_name"
                placeholder="Last Name"
              />
            </div>
            <div className="my-4">
              <label htmlFor="email">Email</label>
              <InputField
                isInput="true"
                type="text"
                className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="my-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileInformation;
