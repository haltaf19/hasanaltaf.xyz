import React from "react";
import Navbar from "../NavBar";
import Home from "../Home"
import {Container, MainContainer} from "../Container"
import styles from "./layout.module.css";
import Headroom from "react-headroom";

export default function Layout(props){


  return (
    <div className={styles.layout}>
    <Headroom>
    <Navbar type={(props.home ? 'transparent' : 'solid')} />
    </Headroom>
    {props.home ? <Home /> : null}
    {props.home ? <Container>{props.children}</Container> : <MainContainer>{props.children}</MainContainer>}
  </div>
  )
}
