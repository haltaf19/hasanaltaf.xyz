import React from "react";
import Navbar from "../NavBar";
import Home from "../Home"
import Container from "../Container"
import styles from "./layout.module.css";
import Headroom from "react-headroom";
import Footer from "../Footer"

export default props => (
  <div className={styles.layout}>
    <Headroom>
    <Navbar type={(props.home ? 'transparent' : 'solid')} />
    </Headroom>
    {props.home ? <Home /> : null}
    <Container>{props.children}</Container>
    <Footer />
  </div>
);

