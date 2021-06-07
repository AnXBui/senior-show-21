import React from "react";
// import "../css/main.scss"
import Navbar from "./Navbar";

const Layout = ({ children, className = "", type = "home", page = "home" }) => {
  return (
    <>
      <Navbar navType={type} pageName={page} />
      <main className={"main " + className}>{children}</main>
    </>
  );
};

export default Layout;
