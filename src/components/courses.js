import React from "react"
import { coursestyle } from "./courses.module.css"
import { coursestylecontainer } from "./courses.module.css"
import Layout2 from "../components/layout2"
import Seo from "../components/seo"

const ExperienceItem = (props) => (
// edits: change this to iterate through all of the props
<Layout2>
  <div className={coursestylecontainer}>
    <ul className={coursestyle}>
      <li className={coursestyle}>Software Engineering</li>
      <li className={coursestyle}>Internet Technologies</li>
      <li className={coursestyle}>Digital Forensics</li>
      <li className={coursestyle}>Machine Learning</li>
      <li className={coursestyle}>Object-Oriented Programming</li>
      <li className={coursestyle}>Game Programming</li>
      <li className={coursestyle}>Computer Organization</li>
      <li className={coursestyle}>Corporate Cybersecurity Strategy</li>
      <li className={coursestyle}>Data Structures</li>
      <li className={coursestyle}>Languages and Paradigms</li>
      <li className={coursestyle}>Operating Systems</li>
      <li className={coursestyle}>Calculus II</li>
      <li className={coursestyle}>Game As Art</li>
    </ul>
  </div>

</Layout2> 

)

export default ExperienceItem