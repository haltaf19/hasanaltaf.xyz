import React from "react";
import Navbar from "../NavBar";
import Home from "../Home"
import About from "../About"
import Experience from "../Experience"
import Education from "../Education"
import {Container, MainContainer} from "../Container"
import styles from "./layout.module.css";
import Headroom from "react-headroom";
import AllProjects from "../AllProjects";

export default function Layout(props){

  return (
    <div className={styles.layout}>
    <Headroom>
    <Navbar/>
    </Headroom>
    {props.home ? <Home /> : null}
    {props.projects ? <AllProjects /> : null}
    {props.about ? <About /> : null}
    {props.experience? <Experience /> : null}
    {props.education ? <Education /> : null}

    {props.home ? <Container>{props.children}</Container> : <MainContainer>{props.children}</MainContainer>}

  </div>
  )
}
