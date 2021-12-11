import React from "react"
import { pink } from "./pink-text.module.css"
import Layout2 from "./layout2"


const PinkText = (props) => (
    <p className={pink}>{props.text}</p>
)

export default PinkText