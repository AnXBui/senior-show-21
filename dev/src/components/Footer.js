import React from "react";
import SocialLinks from "../constants/socialLinks";
import onehundred from "./../assets/100years.png";
import acw from "./../assets/acw-white.png";
import * as styles from "./Footer.module.scss"

import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaVimeoSquare } from "@react-icons/all-files/fa/FaVimeoSquare";


const Footer = () => {
  return <footer className={styles.footer}>
       <p>Graphic Group Drexel Unversity © 2021</p>
       <p>Designed by Nhi Nguyen, Luka Kimlicko, Glenn Volpe and Bex Lewis</p>
       <p>Developed by <a href='https://me.axbdesign.com/'>An Bui</a></p>
  </footer>;
};

export default Footer;
