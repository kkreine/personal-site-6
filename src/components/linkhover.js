import React from "react"
import { hovertext, linktext } from "./linkhover.module.css"
import Layout2 from "../components/layout2"
import { Link } from "gatsby"


const LinkHover = (props) => (
<Layout2>
  <div className={linktext}>
    <Link to={props.link}>{props.text}</Link>
  </div>
  <div className={hovertext}>
    {props.hovertext}
  </div>

</Layout2> 

)

export default LinkHover