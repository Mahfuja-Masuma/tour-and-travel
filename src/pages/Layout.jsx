import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Popup from '../components/Popup/Popup'
import React from 'react'

function Layout() {
  
  const [orderPopup, setOrderPopup] =React.useState(false)
  const handleOrderPopup =() => {
    setOrderPopup(!orderPopup)
  }
  return (
    <>
    <Navbar handleOrderPopup={handleOrderPopup}/>
    <Outlet/>
    <Footer/>
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </>
  )
}

export default Layout