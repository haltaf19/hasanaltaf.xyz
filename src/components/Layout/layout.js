import React from "react";
import Navbar from "../NavBar";
import Home from "../Home"
import styles from "./layout.module.css";
import Headroom from "react-headroom";

export default props => (
  <div className={styles.layout}>
    <Headroom>
    <Navbar type={(props.home ? 'transparent' : 'solid')} />
    </Headroom>
    {props.home ? <Home /> : null}
    <div className={styles.container}>
        {props.children}
    </div>
    <div className={styles.container}>{props.children}</div>
  </div>
);
