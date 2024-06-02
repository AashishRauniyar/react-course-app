import React from 'react'
import { Outlet } from 'react-router-dom'
import navbar from '../components/navbar'
import Navbar from '../components/navbar'

const MainLayout = () => {
  return (
    <>
        <Navbar/>    
        <Outlet/>
    
    </>
  )
}

export default MainLayout