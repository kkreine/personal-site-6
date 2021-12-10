import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { LinkHover } from "../components/linkhover"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>hello, thanks for stopping by</h1>
    <h2>a few things to do here:</h2>
    <h4>view my <Link to="http://github.com/kkreine" target="_blank">github profile</Link></h4>
    <h4>learn about my <Link to="/experience/">experience</Link></h4>
    <h4>peruse my <Link to="/education/">education</Link></h4>
    <h4>take a gander at my <Link to="/garden/">garden</Link></h4>
    <h4>explore the fabulous <Link to="https://pedantic-tereshkova-51a924.netlify.app" target="_blank">three divas gift shop</Link></h4>
    {/* <h4>listen to one of my <Link to="/podcasts/">podcast recommendations</Link> </h4> */}
    <h4>read how i've <Link to="/volunteering/">given back</Link> to my community</h4>

    <h2>a few ways to contact me:</h2>
    <h4>sending a homing pigeon to New Orleans, LA</h4>
    <h4>typing: kori.kreine@gmail.com</h4>
    <h4>hollering: (504) 323-4524</h4>
  </Layout>
)

export default IndexPage
