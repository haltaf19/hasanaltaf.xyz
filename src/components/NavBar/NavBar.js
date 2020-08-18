import React, {useState} from "react";
import styles from "./navbar.module.css";
import { Link } from "gatsby";
import resume from "../../../content/resume/HasanAltafResume.pdf"


const ListLink = props => (
  <li>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
);

const Links = props => (
  <ul>
    <ListLink to="/"><h1 className="logo">HASAN ALTAF</h1></ListLink>
    <ListLink to="/about">About</ListLink>
    <ListLink to="/experience">Experience</ListLink>
    <ListLink to="/projects">All Projects</ListLink>
    <ListLink to="/education">Education</ListLink>
    <li><a href={resume} target="_blank" rel="noreferrer">Resume</a></li>
  </ul>
)



function MinimalBar(props){
  if(!props.show){
    return null;
  } else {
    return (
      <div
        className={props.className}
      >
        <button
          className={styles.menuButton}
          onClick={props.onClick}
        >
          <span style={{ color: props.textColor }}>Menu</span>
        </button>
      </div>
    )
  }
}

  function FullBar(props){
    return (
      <div className={[styles.navbar, styles.navbarDesktop].join(" ")}> 
        <Links />
      </div>
    )
  }

  function NavMobileMenu(props){
    if(!props.show){
      return null;
    } else {
      return (
      <div className={props.className}>
        <button className={styles.closeButton} onClick={props.onClick}>
            <span>Close</span>
        </button>
        <Links />
      </div>
      )
    }
  }

  function Navbar(props){
    const [toggled, setToggled] = useState(false);

    function handleMenuClick(){
      setToggled(true);
    }

    function handleCloseButtonClick(){
      setToggled(false);
    }

    return(
      <div>
        <FullBar className={[styles.navbar, styles.navbarDesktop, props.className].join(" ")} />
        <MinimalBar className = {[styles.navbar, styles.navbarMobile, props.className].join(" ")}
        show={!toggled} onClick={handleMenuClick} />
        <NavMobileMenu className={[styles.navbarMobileMenu, props.className].join(" ")} show ={toggled} onClick={handleCloseButtonClick} />
      </div>
    )
  }




export default props => (
  <Navbar>
    {props.children}
  </Navbar>
);