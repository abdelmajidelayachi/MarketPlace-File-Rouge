import React from 'react'
import Nav from '../../components/clients/Nav'
import Footer from '../../layouts/Footer'

const Profile = () => {
  return (
    <div>
      <div className=" max-w-screen-xl m-auto ">
        <Nav active= 'home' />
      </div>
      <div className="w-full bg-gray-100">
        
        <Footer/>
      </div>  
    </div>
  )
}

export default Profile