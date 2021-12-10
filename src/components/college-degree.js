


import React from "react"
import {
  row,
  column,
  column2,
  org,
  ul
} from "./college-degree.module.css"
import Layout2 from "../components/layout2"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const CollegeDegree = (props) => (
  <Layout2>

    <div className={row}>
      <div className={column}>
        {props.image}
      </div>
      <div className={column}>
        <h2>{props.degreename}</h2>
        <h4>{props.collegename}</h4>
        <h4>Graduation: {props.graduationdate}</h4>
        <ul className={ul}>
        <li className={org}>Dean's List 2019-2021</li>
        <li className={org}>Alpha Sigma Nu Honor Society</li>
        <li className={org}>National Society of Leadership and Success</li>
        <li className={org}>Omicron Delta Kappa Honor Society</li>
      </ul>
      </div>
    </div>
    {/* 


  <h2>Bachelor of Science, Computer Science Cybersecurity</h2>
  <h3>Loyola University New Orleans</h3>
  <h4>Graduation: May 2022</h4>
  <div className={row}>
    <div className={column}>

    </div>
    <div className={column2}>
      <ul className={ul}>
        <li className={org}>Dean's List 2019-2021</li>
        <li className={org}>Alpha Sigma Nu Honor Society</li>
        <li className={org}>National Society of Leadership and Success</li>
        <li className={org}>Omicron Delta Kappa Honor Society</li>
      </ul>
    </div>
  </div> */}
  </Layout2>
)

export default CollegeDegree
