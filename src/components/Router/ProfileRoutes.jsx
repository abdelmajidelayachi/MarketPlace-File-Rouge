import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from '../../pages/client/Profile'

const ProfileRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default ProfileRoutes