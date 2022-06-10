import React from 'react'
import { Link } from 'react-router-dom'

const DropdownProfile = (props) => {
  return (
    <div className='fixed md:right-48 right-5 md:top-32 top-12 z-50'>
    <div className=' flex flex-col items-start justify-start'>
      <ul className='ml-6 divide-gray-100 rounded-md bg-white  ring-1 ring-black ring-opacity-5'>
        <Link to="/profile">
          <li className=" md:right-0 w-40 origin-top-right divide-y  focus:outline-none hover:bg-blue-500 hover:text-white px-3 py-2">
            Profile
          </li>
        </Link>
   
        <button onClick={()=>props.onClickLogout()}>
          <li className=" md:right-0 w-40 origin-top-right divide-y flex justify-start  hover:bg-blue-500 hover:text-white px-3 py-2">
           Logout  
          </li>
        </button>
      </ul>
    
  </div>
  </div>
  )
}

export default DropdownProfile