import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const PodcastsPage = () => (
  <Layout>
    <h1>hello, thanks for stopping by</h1>
    <h2>a few things to do here:</h2>
    <h4>view my <Link to="http://github.com/kkreine">github profile</Link></h4>
    <h4>learn about my <Link to="/experience/">experience</Link></h4>
    <h4>learn more about my <Link to="/education/">education</Link></h4>
    <h4>take a gander at my <Link to="/garden/">garden</Link></h4>
    <h4>explore the fabulous <Link to="https://pedantic-tereshkova-51a924.netlify.app">three divas gift shop</Link></h4>
    <h4>listen to one of my <Link to="/podcasts/">podcast recommendations</Link> </h4>

    <h2>a few ways to contact me:</h2>
    <h4>sending a homing pigeon to New Orleans, LA</h4>
    <h4>typing: kori.kreine@gmail.com</h4>
    <h4>hollering: (504) 323-4524</h4>
  </Layout>
)

export default PodcastsPage
