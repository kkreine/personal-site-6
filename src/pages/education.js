import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Courses from "../components/courses"
import CollegeDegree from "../components/college-degree"

const EducationPage = () => (
    <Layout>
        <Seo title="education" />
        <h1>Education</h1>
        <CollegeDegree
            image={<StaticImage alt="Loyola University New Orleans logo" src="../images/loyno-logo.png" />}
            degreename="Bachelor of Science, Computer Science Cybersecurity"
            collegename="Loyola University New Orleans"
            graduationdate="May 2022"
        />


        <h3>Relevant Courses:</h3>
        <Courses />

        <h3>Some other fun learning:</h3>
        <h4>Java Code Immersion ~ Tech Talent South</h4>

        <li>Udemy 2020 Complete Ruby on Rails Bootcamp</li>
        <li>Udemy Complete Ruby on rails Dev Course (in progress)</li>
        <p><Link to="/">back to the homepage</Link></p>

    </Layout>
)

export default EducationPage
