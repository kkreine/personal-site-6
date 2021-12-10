import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageGall from "../components/image-gall"


const GardenPage = () => {

  const images = [{ thumb: "Broccoli", full: "../images/broccoli.jpg" },
  { thumb: "Squash", full: "../images/squash.jpg" }]

  return (
    <Layout>
      <Seo title="garden" />
      <h1>garden</h1>
      <p><em>currently growing: cabbage, spinach, radishes, and romaine</em></p>
      <ImageGall
        image1={<StaticImage alt="Broccoli" src="../images/broccoli.jpg" />}
        image2={<StaticImage alt="Squash" src="../images/squash.jpg" />}
        image3={<StaticImage alt="Watermelon" src="../images/watermelon.jpg" />}
        image4={<StaticImage alt="Kalanchoe" src="../images/kalanchoe.jpg" />}
        image5={<StaticImage alt="Broccoli harvest in a plastic bag" src="../images/broccoli2.jpg" />}
        image6={<StaticImage alt="Strawberries" src="../images/strawberries.jpg" />}
      />
      <p><Link to="/">back to the homepage</Link></p>

    </Layout>
  )
}

export default GardenPage