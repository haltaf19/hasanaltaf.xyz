import React from "react"
import styles from "./Projects.module.css"
import { GoMarkGithub, GoLinkExternal, GoBook, GoLink } from "react-icons/go"



function ProjectComponent(props){
    let {
        project,
        description,
        skills,
        link,
        github,
        date,
        showCase,
        frontpage
      } = props.projects
      return(
        <>
        <div class= {styles.projectPost}>
          <div class={styles.projectPostImage}>
            {showCase? <img src = {showCase.publicURL} /> : null}
          </div>
          <div className={styles.projectInfo}>
            <div className={styles.projectName}>
              <span>{project}</span>
            </div>
              <span className = {styles.projectDate}>{date}</span>
            <p className={styles.projectText}>
              {description}
            </p>
            <a href={github} className={styles.projectLinks} target = "_blank">Github <GoMarkGithub /></a>
            {link ? <a href={link} className={styles.projectLinks} target = "_blank">Visit Project <GoLinkExternal /></a> : null}
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


