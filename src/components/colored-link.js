import React from "react"
import { color, pink } from "./colored-link.module.css"
import Layout2 from "./layout2"
import { Link } from "gatsby"


const ColoredLink = (props) => (
    <Link to={props.linktext} className={pink}>{props.text}</Link>
)

export default ColoredLink