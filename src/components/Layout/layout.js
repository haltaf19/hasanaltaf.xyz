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

const Footer = props => (
  <footer className={styles.indexFooter}>
  <Container>
    <Flex className={styles.FlexBox}>
      <Box mb={10} width={[1 / 2, 1 / 4, 1 / 5, 1 / 4]}>
      <a className={styles.button} href="https://www.linkedin.com/in/hasanaltaf/" target="_blank">
          <GrLinkedin />
        </a>
      </Box>
      <Box mb={10} width={[1 / 2, 1 / 4, 1 / 5, 1 / 4]}>
      <a className={styles.button} href="mailto:hasanaltaf2001@gmail.com" target="_blank">
        <MdEmail />
        </a>
      </Box>
      <Box mb={10} width={[1 / 2, 1 / 4, 1 / 5, 1 / 4]}>
      <a className={styles.button} href="https://github.com/haltaf19" target="_blank">
        <GrGithub />
        </a>
      </Box>
    </Flex>

    <Flex className={styles.FlexBox}>
      <Box width={1}>
        <em className={styles.content}>Made With Love By Hasan Altaf ©{new Date().getFullYear()}</em>
      </Box>
    </Flex>
  </Container>
</footer>
)


