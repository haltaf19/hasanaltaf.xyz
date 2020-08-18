import React from "react"
import styles from "./Education.module.css"
import resume from "../data/resume.json"



function Education(){
    const education = resume.education

    function calcGPA(grade){
        if(grade >= 90){
            return "4.0"
        } else if (grade >= 85) {
            return "3.9"
        } else {
            return "it is dissapointing you have let it drop this low :("
        }

    }

    return(
        <div className={styles.container}>
            <div className = {styles.content}>
                <div>
                    <h3 className={styles.degree}>{education.degree}</h3>
                </div>
                <div className = {styles.information}>
                    <span>{calcGPA(education.grade)} / 4.0 ({education.grade}% average)</span>
                    <span>Expected Completion: {education.endDate}</span>
                </div>
                    <h5 className={styles.innerTitle}>Key Courses</h5>
                    <div className={styles.courseList}>
                    <ul>
                        <li><span className={styles.titleList}>Computer Science</span>
                            <ul>
                                {education.computerCourses.map((course) => 
                                    <li>{course}</li>
                                )}
                            </ul>
                        </li>
                        <li><span className={styles.titleList}>Business</span>
                            <ul>
                                {education.businessCourses.map((course) => 
                                    <li>{course}</li>
                                )}
                            </ul>
                        </li>
                        <li><span className={styles.titleList}>Mathematics</span>
                            <ul>
                                {education.mathCourses.map((course) => 
                                    <li>{course}</li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>

    )



}

export default Education