import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"
import styles from "./About.module.css"
import headshot from "../../images/hasan.png"



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

    console.log(data)

return(
    <>
   {/* <img src={headshot} className={styles.headshot}></img>  */}
   <div className={styles.headshot} >
   <Img fluid={data.headshot.childImageSharp.fluid} fadeIn alt="headshot" />
   </div>
    <div className={styles.mainContent}>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
       and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
