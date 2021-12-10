import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import ExperienceItem from "../components/experience-item"

const ExperiencePage = () => (
  <Layout>
    <Seo title="experience" />
    <h1>experience</h1>
    <ExperienceItem
      title="Video Engineer Trainee"
      company="Atheist Community of Austin"
      dates="November 2021 - Present"
      descr="Currently training to be a (volunteer) video engineer for the 501(c)3 organization's multiple live streams using Wirecast"
    />
    <ExperienceItem
      title="Recruiting Assistant"
      company="New York Life & NYLife Securities LLC"
      dates="May 2019 - August 2019"
      descr="As assistant to a partner, increased the number of interviews and hires to exceed quota"
    />
    <ExperienceItem
      title="Three Divas Gift Shop"
      company="Online Store and Social Media Assistant"
      dates="November 2019 - January 2020"
      descr="Built a website through Shopify that increased sales for the business and expanded sales to nationwide"
    />
    <ExperienceItem
      title="Childcare Provider"
      company="Self / St. Catherine of Siena School"
      dates="October 2018 - April 2021October 2018 - April 2021"
      descr="Assisted families and an elementary school for 15-25 hours per week while enrolled full-time in school"
    />
    <ExperienceItem
      title="Team Leader"
      company="Jumpstart"
      dates="October 2017 - April 2018"
      descr="Led a team of college students in implementing a bi-weekly lesson plan for low-income pre-schools while enrolled full-time in school
      Coached team members and coordinate team administration"
    />

    <p><Link to="/">back to the homepage</Link></p>

  </Layout>
)

export default ExperiencePage