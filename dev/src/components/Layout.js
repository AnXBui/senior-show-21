import React from "react"
// import "../css/main.scss"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children, className = ''}) => {
  return <>
       <Navbar />
      <main className={"main " + className}>
      {children}
      </main>    
      </>
}

export default Layout
