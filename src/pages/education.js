import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Courses from "../components/courses"
import CollegeDegree from "../components/college-degree"
import ColoredLink from "../components/colored-link"
import Collapsible from "../components/collapsible"
import Accordion from "../components/accordion"
import HorizontalLine from "../components/horizontal-line"

const EducationPage = () => (
    <Layout>
        <Seo title="education" />
        <h1>Education</h1>
        <CollegeDegree
            image={<StaticImage alt="Loyola University New Orleans logo" src="../images/loyno-logo2.png" />}
            degreename="Bachelor of Science, Computer Science Cybersecurity"
            collegename="Loyola University New Orleans"
            graduationdate="May 2022"
        />
        <HorizontalLine />

        <h3>Relevant Courses:</h3>
        <Courses />

        <p><ColoredLink linktext="/" text="back to the homepage"/> </p>
    </Layout>
)

export default EducationPage
