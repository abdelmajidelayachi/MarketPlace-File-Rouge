import React, { useState } from 'react'
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import { InputField } from '../../components/admin/InputField';
import axios from 'axios';

const ChangePassword = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const [passwordUpdate, setPasswordUpdate] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(false);

  const sendPasswordInformation =async(data)=>{
    const response= await axios.post("http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/user/update_password",data);
    console.log(response.data);
    if(response.data.success == true){
      if(response.data.message==="success"){
        setPasswordUpdate(true);
        setError(false);
        setPasswordError(false);
      }else if(response.data.message==="error"){
        setPasswordUpdate(false);
        setError(true); 
        setPasswordError(false);
      }
    }else{
      setPasswordUpdate(false); 
      setPasswordError(true);
      setError(false);
      }
  }
  const submitChangePassword = (values) => {
    // console.log(values);
    const data = new FormData();
    data.append('id',user.id);
    data.append('current_password',values.current_password);
    data.append('new_password',values.password);
    data.append('new_password_confirmation',values.password_confirmation);
    sendPasswordInformation(data);
  }

  return (
    <div className='py-8'>
      <h1 className='text-lg font-semibold flex mb-3'>Change Password</h1>

      {passwordUpdate?<div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative' role='alert'>
      <strong className='font-bold'>Success!</strong>
      <span className='block sm:inline'>Your password has been updated.</span>
      <span onClick={()=>setPasswordUpdate(false)} className='absolute top-0 bottom-0 right-0 px-4 py-3'>
        <svg className='fill-current h-6 w-6 text-green-500' role='button' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <title>Close</title>
          <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z'/>
        </svg>
      </span>

      </div>:""
      }

      {passwordError?<div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
      <strong className='font-bold'>Error!</strong>
      <span className='block sm:inline'>Your password is incorrect.</span>
      <span onClick={()=>setPasswordError(false)} className='absolute top-0 bottom-0 right-0 px-4 py-3'>
        <svg className='fill-current h-6 w-6 text-red-500' role='button' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <title>Close</title>
          <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z'/>
        </svg>
      </span>
      </div>:""}

      {error?<div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
      <strong className='font-bold'>Error!</strong>
      <span className='block sm:inline'>Something went wrong.</span>
      <span onClick={()=>setError(false)} className='absolute top-0 bottom-0 right-0 px-4 py-3'>
        <svg className='fill-current h-6 w-6 text-red-500' role='button' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <title>Close</title>
          <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z'/>
        </svg>
      </span>
      </div>:""}

      <Formik 
        initialValues={{
          current_password: '',
          new_password: '',
          confirm_password: ''
        }}
        validationSchema={Yup.object({
          current_password: Yup.string()
            .required('Current password is required'),
          new_password: Yup.string()
            .required('New password is required'),
          confirm_password: Yup.string()
            .required('Confirm password is required')
            .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
        })}
        onSubmit={submitChangePassword}
        >
          {(formik)=>(
            <Form>
              <div className='my-4'>
                <label htmlFor="current_password">Current Password</label>
                <InputField
                isInput ="true"
                type="password"
                className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                name="current_password"
                placeholder="current Password"
                />
              </div>
              <div className='my-4'>
                <label htmlFor="new_password">New Password</label>
                <InputField
                isInput ="true"
                type="password"
                className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                name="new_password"
                placeholder="New Password"
                />
              </div>
              <div className='my-4'>
                <label htmlFor="confirm_password">Confirm Password</label>
                <InputField
                isInput ="true"
                type="password"
                className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
                name="confirm_password"
                placeholder="Confirm Password"
                />
              </div>
              <div className='flex justify-start mt-4'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                  Change Password
                </button>
              </div>
            </Form>
          )}
        </Formik>
        
    </div>

  )
}

export default ChangePassword