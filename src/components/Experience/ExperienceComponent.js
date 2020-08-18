import React from "react"
import styles from "./Experience.module.css"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import Experience from "."



function ExperienceComponent(props){
    let {
        company,
        role,
        description,
        skills,
        startDate,
        endDate,
      } = props

      const data = useStaticQuery(graphql`
      query logoQuery {
          TEALS: file(absolutePath: {regex: "/TEALS.png/"}) {
              childImageSharp {
                  fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          westpeak: file(absolutePath: {regex: "/westpeak.jpg/"}) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        bchydro: file(absolutePath: {regex: "/bchydro.png/"}) {
          childImageSharp {
              fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
              }
          }
      }
    }

      `
)
      

      function getImage(company){
        switch(company) {
          case "BC Hydro":
            return (<Img fluid={data.bchydro.childImageSharp.fluid} fadeIn alt="bc hydro logo" />)
          case "Microsoft Teals":
            return (<Img fluid={data.TEALS.childImageSharp.fluid} fadeIn alt="Microsoft Teals logo" />)
          case "WestPeak Research Association":
            return (<Img fluid={data.westpeak.childImageSharp.fluid} fadeInalt="WestPeak Research Association logo" />)
          default:
            return null
        }
      }

      return(
        <>
        <div className= {styles.experiencePost}>
          <div className={styles.experiencePostImage}>
            {getImage(company)}
          </div>
          <div className={styles.experienceInfo}>
            <div className={styles.experienceName}>
              <span>{company}</span>
            </div>
            <div className={styles.role}>
              <span>{role}</span>
            </div>
              <span className = {styles.experienceDate}>{startDate} - {endDate}</span>
            <ul className={styles.experienceText}>
              {description.map((point, i) => (
                <li key = {i}>{point}</li>
              ))}
            </ul>
            <div className={styles.experienceSkills}>
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

  export default ExperienceComponent


