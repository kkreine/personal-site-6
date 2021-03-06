import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import ExperienceItem from "../components/experience-item"
import ColoredLink from "../components/colored-link"

const ExperiencePage = () => (
  <Layout>
    <Seo title="experience" />
    <h1>Experience</h1>
    <ExperienceItem
      title="Website Developer"
      company="Three Divas Gift Shop"
      dates="January 2022 - Present"
      descr="Developing a website to display the gift shop's products to reach a wider audience and bring in new customers"
    />
    <ExperienceItem
      title="C# Tutor"
      company="Self"
      dates="January 2022"
      descr="Teaching C# programming fundamentals through lectures and homework assistance to a game design student in a month-long introduction to C# course"
    />
    {/* <ExperienceItem
      title="Video Engineer Trainee"
      company="Atheist Community of Austin"
      dates="November 2021 - Present"
      descr="Currently training to be a (volunteer) video engineer for the 501(c)3 organization's multiple live streams using Wirecast"
    /> */}
    <ExperienceItem
      title="Online Store and Social Media Assistant"
      company="Three Divas Gift Shop"
      dates="November 2019 - January 2020"
      descr="Expanded sales to nationwide through building a Shopify website and cultivating a brand image through social media."
    />
    <ExperienceItem
      title="Recruiting Assistant"
      company="New York Life & NYLife Securities LLC"
      dates="May 2019 - August 2019"
      descr="As assistant to a partner, increased the number of interviews and hires to exceed quota"
    />
    <ExperienceItem
      title="Tutor / HomeSchool Teacher / Childcare Provider"
      company="Self / St. Catherine of Siena School"
      dates="October 2018 - April 2021"
      descr="Assisted families and an elementary school for 15-25 hours per week while enrolled full-time in school"
    />
    <ExperienceItem
      title="Team Leader"
      company="Jumpstart"
      dates="October 2017 - April 2018"
      descr="Led a team of college students in implementing a bi-weekly lesson plan for low-income pre-schools while enrolled full-time in school; 
      Coached team members and coordinate team administration"
    />

    <p><ColoredLink linktext="/" text="back to the homepage" /> </p>

  </Layout>
)

export default ExperiencePage