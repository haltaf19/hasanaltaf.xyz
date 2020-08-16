import React from "react"
import Projects from "../Projects"
import {useStaticQuery, graphql} from "gatsby"
import styles from "./AllProjects.module.css"



function AllProjects(){

    const data = useStaticQuery(graphql`
    query allProjectsQuery {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
          nodes {
            frontmatter {
              description
              frontpage
              github
              link
              project
              skills
              title
              date(formatString: "MMMM YYYY")
              showCase {
                publicURL
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                    base64
                  }
                }
              }
            }
          }
        }
      }
      
    `
    );

    const projects =  data.allMarkdownRemark.nodes;
    return(
        <>
        <div className={styles.content}>
          <h2 className={styles.title}>All Projects</h2>
        <Projects projects={projects} homePage={false} />
        </div>
        </>

    )
}

export default AllProjects