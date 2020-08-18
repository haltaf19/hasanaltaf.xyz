import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"
import styles from "./About.module.css"



function About(){
     const data = useStaticQuery(graphql`
        query imageQuery {
            headshot: file(absolutePath: {regex: "/hasan.png/"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }

        `
)


return(
    <>
   {/* <img src={headshot} className={styles.headshot}></img>  */}
   <div className={styles.headshot} >
   <Img fluid={data.headshot.childImageSharp.fluid} fadeIn alt="headshot" />
   </div>
    <div className={styles.mainContent}>
    <p>
        Hey There! My name is Hasan and I am a sophomore student at the University of British Columbia studying Computer Science and 
        Business. My current interests are application development, entrepreneurship, and financial technology, specifically algorithmic
        trading. I am someone that loves learning new concepts and tackling interesting challenges.
    </p>
      <p>
      I first fell in love with technology when I realized it was the greatest equalizer. It gives a platform to those who need one,
       a voice to those who don’t have one and opportunities to those without access to them. As a result, I strive to create impact 
       in every activity and project I pursue.
      </p>

      <p>
      </p>
    </div>
    </>
)


}


export default About

// export const query = graphql`
//     query imageQuery {
//         headshot: file(absolutePath: {regex: "/hasan.png/"}) {
//             childImageSharp {
//                 fluid(maxWidth: 2000) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//     }

// `
