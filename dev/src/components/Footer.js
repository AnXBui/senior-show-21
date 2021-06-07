import React from "react";
import * as styles from "./Footer.module.scss"

const Footer = () => {
  return <footer className={styles.footer}>
       <p>Graphics Group Drexel Unversity © 2021</p>
       <p>Designed by Nhi Nguyen, Luka Kimlicko, Glen Volpe and Bex Lewis</p>
       <p>Developed by <a rel='noreferrer' target='_blank' href='https://anxbui.com'>An Bui</a></p>
  </footer>;
};

export default Footer;
