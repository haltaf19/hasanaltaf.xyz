  
import React from "react"
import { Link } from "gatsby"
import resume from "../../../content/resume/HasanAltafResume.pdf"
import { GrLinkedin, GrGithub} from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import styles from "./Bio.module.css"
import Container from "../Container"




function Bio(props){

const resumeLink = <a href={resume} target="_blank">here</a>

return (
  <>
    <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
    }}
    className={styles.bioSection}
    >
     <h2 className={styles.title}>Nice to Meet You!</h2>
      <p className={styles.mainContent}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
       and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.{resumeLink} 
      </p>

      <div className={styles.wrapper}>
      <a className={styles.button} href="https://www.linkedin.com/in/hasanaltaf/" target="_blank">
              <GrLinkedin />
          </a>
          <a className={styles.button} href="https://github.com/haltaf19" target="_blank">
            <GrGithub />
          </a>
          <a className={styles.button} href="mailto:hasanaltaf2001@gmail.com" target="_blank">
              <MdEmail />
          </a>
      </div>
      </div>
      </>
  )

}

export default Bio
