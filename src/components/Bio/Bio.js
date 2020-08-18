  
import React from "react"
import resume from "../../../content/resume/HasanAltafResume.pdf"
import { GrLinkedin, GrGithub} from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import styles from "./Bio.module.css"




function Bio(props){

const resumeLink = <a href={resume} target="_blank" rel="noreferrer">here</a>

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
      Hello! My name is Hasan and I am a sophomore at UBC studying Computer Science and Business. I am a passionate software developer 
      with a diverse portfolio of projects with a variety of technical stacks. I also have extensive leadership experience through my professional
      and extracurricular endeavours. When I'm not coding, you can find me hitting the gym, playing soccer or volunteering in my community!
      Feel free to look around my website and view my resume {resumeLink}.
      </p>

      <div className={styles.wrapper}>
      <a className={styles.button} href="https://www.linkedin.com/in/hasanaltaf/" target="_blank" rel="noreferrer">
              <GrLinkedin />
          </a>
          <a className={styles.button} href="https://github.com/haltaf19" target="_blank" rel="noreferrer">
            <GrGithub />
          </a>
          <a className={styles.button} href="mailto:hasanaltaf2001@gmail.com" target="_blank" rel="noreferrer">
              <MdEmail />
          </a>
      </div>
      </div>
      </>
  )

}

export default Bio
