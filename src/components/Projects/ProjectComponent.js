import React from "react"
import styles from "./Projects.module.css"
import { GoMarkGithub, GoLinkExternal} from "react-icons/go"



function ProjectComponent(props){
    let {
        project,
        description,
        skills,
        link,
        github,
        date,
        showCase
      } = props.projects
      return(
        <>
        <div className= {styles.projectPost}>
          <div className={styles.projectPostImage}>
            {showCase? <img src = {showCase.publicURL} alt="showcase" /> : null}
          </div>
          <div className={styles.projectInfo}>
            <div className={styles.projectName}>
              <span>{project}</span>
            </div>
              <span className = {styles.projectDate}>{date}</span>
            <p className={styles.projectText}>
              {description}
            </p>
            <a href={github} className={styles.projectLinks} target = "_blank" rel="noreferrer">Github <GoMarkGithub /></a>
            {link ? <a href={link} className={styles.projectLinks} target = "_blank" rel="noreferrer">Visit Project <GoLinkExternal /></a> : null}
            <div className={styles.projectSkills}>
              {skills.map((skill, i) => (
                <span key={i} className={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        </>
    )
  }

export default ProjectComponent


