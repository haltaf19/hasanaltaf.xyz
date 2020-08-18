import React from "react"
import ProjectComponent from "./ProjectComponent"
import styles from "./Projects.module.css"
import { Link } from "gatsby"




export default function Projects(props){

    const data = props.projects;

    return(
        <>
        {props.homePage ?  
        <>
        <h2 className={styles.title}>Highlighted Projects</h2>
              <p className={styles.titleText}>
                I have experience designing, developing and deploying applications! See below for 
                the highlighed projects.
                <br /><br />
                <Link className="effect" to="/projects">View All Projects</Link>
              </p>
              </> : null
              } 
           
              {
                  <>
                    {data.map((project, index) => (
                        <ProjectComponent key={index} projects={project.frontmatter} />
                    ))
                    }
                  </>
              }
        </>
             
    )


}
