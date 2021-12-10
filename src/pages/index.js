import * as React from "react"
import { Link } from "gatsby"
import ColoredLink from "../components/colored-link"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>hello, thanks for stopping by</h1>
    <h2>a few things to do here:</h2>
    <h4>view my <ColoredLink linktext="http://github.com/kkreine" text="github profile" /></h4>
    <h4>learn about my <ColoredLink linktext="/experience/" text="experience" /></h4>
    <h4>peruse my <ColoredLink linktext="/education/" text="education" /></h4>
    <h4>take a gander at my <ColoredLink linktext="/garden/" text="garden" /></h4>
    <h4>explore the fabulous <ColoredLink linktext="https://pedantic-tereshkova-51a924.netlify.app" text="three divas gift shop" /></h4>   
    {/* <h4>listen to one of my <Link to="/podcasts/">podcast recommendations</Link> </h4> */}
    <h4>read how i've <ColoredLink linktext="/volunteering/" text="given back" /> to my community</h4>

    <h2>a few ways to contact me:</h2>
    <h4>sending a homing pigeon to New Orleans, LA</h4>
    <h4>typing: kori.kreine@gmail.com</h4>
    <h4>hollering: (504) 323-4524</h4>
  </Layout>
)

export default IndexPage
