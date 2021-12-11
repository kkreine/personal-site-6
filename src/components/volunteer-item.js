import React from "react"
import { 
  row,
  column
  } from "./volunteer-item.module.css"
import Layout2 from "../components/layout2"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import ColoredLink from "./colored-link"

const VolunteerItem = (props) => (
<Layout2>
  <div className={row}>
    <div className={column}>
      {props.image}
    </div>
    <div className={column}>
      <h2>{props.orgtitle}</h2>
      <h4>{props.positiontitle}</h4>
      <h4>{props.dates}</h4>
      <h4><ColoredLink linktext={props.orglink} text="get involved!" /></h4>
    </div>
  </div>

</Layout2> 

)

export default VolunteerItem