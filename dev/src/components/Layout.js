import React from "react"
// import "../css/main.scss"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ children, className = '', type='home', page='home'}) => {
  return <>
       <Navbar navType = {type} pageName={page}/>
      <main className={"main " + className}>
      {children}
      </main>    
      </>
}

export default Layout
