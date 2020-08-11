import React from "react"
import styles from "./Container.module.css"



export const Container = props => (
  <div className={styles.container}>{props.children}</div>
)

export const MainContainer = props => (
  <div className={styles.container + " " + styles.mainContainer}>
    {props.children}
  </div>
)