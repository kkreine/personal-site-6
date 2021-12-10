import React from "react"
import Layout2 from "./layout2"
import { imggall } from "./image-gall.module.css"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "./seo"
import { row, column } from "./image-gall.module.css"

const ImageGall = (props) => (
  <Layout2>
    <div className={row}>
      <div className={column}>
        {props.image1}
        {props.image2}
        {props.image5}
      </div>
      <div className={column}>
        {props.image3}
        {props.image4}
        {props.image6}
      </div>
    </div>
  </Layout2 >
)

export default ImageGall
