import React from "react";
import Navbar from "../NavBar";
import Home from "../Home"
import About from "../About"
import Experience from "../Experience"
import Education from "../Education"
import AllProjects from "../AllProjects";
import Footer from "../Footer"
import styles from "./Layout.module.css";
import Headroom from "react-headroom";
import { Helmet } from "react-helmet"



function Layout(props){

  return (
    <>
        <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Hasan Altaf</title>
          <link rel="canonical" href="hasanaltaf.xyz" />
        </Helmet>
      </div>
    <div className={styles.layout}>
    <Headroom>
    <Navbar/>
    </Headroom>
    {props.home ? <Home /> : null}
    {props.projects ? <AllProjects /> : null}
    {props.about ? <About /> : null}
    {props.experience? <Experience /> : null}
    {props.education ? <Education /> : null}
 
    </div>

    {/* <Footer /> */}
    <Footer />
    </>
  )
}

export default Layout