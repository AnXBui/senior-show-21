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
  return <footer>
    <div>
        <section id="blue-boxes">
            <ul>
                <li><a href="https://drexel.edu/co-op100/"><img src={onehundred} alt="100 Year COOP logo"/></a></li>
                <li><a href="hhttps://drexel.edu/ambitioncantwait/"><img src={acw} alt="Amition can't wait"/></a></li>
            </ul>
        </section>

        <section id="footer-nav">
            <ul>
                <li><a href="https://drexel.edu/guide/a-z/">A-Z Index</a></li>
                <li><a href="https://drexel.edu/ucomm/news-media/about-media-relations/">For Media</a></li>
                <li><a href="https://drexel.edu/hr/atDrexel/employmentOps/">Careers</a></li>
                <li><a href="https://drexel.edu/about/privacy-legal/">Privacy & Legal</a></li>
                <li><a href="https://drexel.edu/about/contact/">Contact</a></li>
                <li><a href="https://drexel.edu/about/directions/">Directions & Maps</a></li>
                <li><a href="https://drexel.edu/publicsafety/about/emergency-contacts/">Emergency Informations</a></li>
            </ul>
        </section>

        <section id="social-nav">
            <h3>Follow Westphal:</h3>
            <ul>
                <li><a href="https://www.facebook.com/DrexelWestphalCollege/" target="_blank"><FaFacebookSquare /></a></li>
                <li><a href="https://twitter.com/drexelwestphal" target="_blank"><FaTwitterSquare /></a></li>
                <li><a href="https://www.instagram.com/drexelwestphal/" target="_blank"><FaInstagramSquare/></a></li>
                <li><a href="https://vimeo.com/westphalcollege" target="_blank"><FaVimeoSquare/></a></li>
            </ul>
        </section>

        <section id="footer-address">
            <address>Drexel University, 3141 Chestnut Street, Philadelphia, PA 19104</address>
            <a href="tel:1-215-895-2000">215.895.2000</a>
            <p>© All Rights Reserved</p>
        </section>
    </div>
  </footer>;
};

export default Footer;
