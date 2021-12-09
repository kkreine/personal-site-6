import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Courses from "../components/courses"

const EducationPage = () => (
<Layout>
    <Seo title="education" />
    <h1>education</h1>
    <h3>Bachelor of Science, Computer Science Cybersecurity</h3>
    <h4>Loyola University New Orleans, Graduation: May 2022</h4>

    {/* make this into a component */}
    <ul class="college-orgs-ul">
        <li class="college-orgs-item">Dean's List 2019-2021</li>
        <li class="college-orgs-item">Alpha Sigma Nu Honor Society</li>
        <li class="college-orgs-item">National Society of Leadership and Success</li>
        <li class="college-orgs-item">Omicron Delta Kappa Honor Society</li>
    </ul>

    <h5>my relevant courses:</h5>
    <Courses />

    <h3>some other fun learning:</h3>
    <h4>Java Code Immersion ~ Tech Talent South</h4>

        <li>Udemy 2020 Complete Ruby on Rails Bootcamp</li>
        <li>Udemy Complete Ruby on rails Dev Course (in progress)</li>
</Layout>
)

export default EducationPage
