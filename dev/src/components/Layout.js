import React from "react"
// import "../css/main.scss"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}

export default Layout
