import React from "react";
import Navbar from "../NavBar";
import Home from "../Home"
import {Container, MainContainer} from "../Container"
import styles from "./layout.module.css";
import Headroom from "react-headroom";
import emailIcon from "../images/email.png"
import { GrLinkedin, GrGithub} from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { Flex, Box, Image } from "rebass"
import Footer from "../Footer"


export default function Layout(props){


  return (
    <div className={styles.layout}>
    <Headroom>
    <Navbar type={(props.home ? 'transparent' : 'solid')} />
    </Headroom>
    {props.home ? <Home /> : null}
    {props.home ? <Container>{props.children}</Container> : <MainContainer>{props.children}</MainContainer>}
    <Footer />
  </div>
  )
}
