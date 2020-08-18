import React from "react"
import ExperienceComponent from "./ExperienceComponent"
import styles from "./Experience.module.css"
import resume from "../data/resume.json"




export default function Experience(){
  const data = resume.experience.list

    return(
         <div className={styles.content}>
          <h2 className={styles.title}>Recent Experience</h2>
              {
                  <>
                    {data.map((experience, index) => (
                        <ExperienceComponent key={index}
                        company = {experience.company}
                        role = {experience.title}
                        description = {experience.description} 
                        skills= {experience.technologies}
                        startDate = {experience.startDate}
                        endDate = {experience.endDate} 
                         />
                    ))
                    }
                  </>
              }
            </div>             
    )


}
