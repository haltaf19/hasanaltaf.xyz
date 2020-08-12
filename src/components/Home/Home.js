import React, {useState} from "react"
import styles from "./Home.module.css"
import Typist from 'react-typist'
import Bio from "../Bio"



function Home(){

  const [typistIndex, setTypistIndex] = useState(0)
  const typistStrings = [
    "Hasan Altaf",
    "a UBC Sophomore",
    "a Software Developer",
    "a Problem-Solver",
    "excited to meet you!"
  ]

  function onComplete(){
    if(typistIndex === typistStrings.length - 1){
      setTypistIndex(0)
    } else {
      setTypistIndex(typistIndex + 1)
    }
  }


  return(
    <>
      <div className={styles.home}>
        <div className={styles.title}>
          <h1>Hello! I'm</h1>
          <h1>
            <Typist className="typist" onTypingDone={onComplete} stdTypingDelay={0} key={typistIndex}>
              {`>`}  {typistStrings[typistIndex]}
              <Typist.Backspace count={typistStrings[typistIndex].length} delay={1500}/>
          </Typist>
          </h1>
          <div className={styles.arrow_part}>
              <span></span>
              <span></span>
              <span></span>
            </div>
      </div>
      </div>
      <Bio />
      </>

  )
}
 


export default Home