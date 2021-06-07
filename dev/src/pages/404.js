import React from "react";
import { Link } from "gatsby";
import * as styles from "./404.module.scss"

const Error = () => {
  return <section className={styles.error}>
      <h2>
        Ups! You're not supposed to see this :(
      </h2>  
      <Link className={`h3 krona ${styles.goBack}`}to='/'>Go back</Link>
    </section>;
};

export default Error;
