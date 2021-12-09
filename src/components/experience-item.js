import React from "react"
import { 
  exp,
  expcontainer,
  lastexp } from "./experience-item.module.css"
import Layout2 from "../components/layout2"

const ExperienceItem = (props) => (
<Layout2>
  <div className={expcontainer}>
    <h2 className={exp}>{props.title}</h2>
    <h4 className={exp}>{props.company}</h4>
    <h4 className={exp}>{props.dates}</h4>
    <h5 className={lastexp}>{props.descr}</h5>
  </div>
</Layout2> 

)

export default ExperienceItem