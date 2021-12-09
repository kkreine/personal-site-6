import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import VolunteerItem from "../components/volunteer-item"

const VolunteeringPage = () => (
  <Layout>
    <VolunteerItem
      image={<StaticImage alt="Atheist Community of Austin logo" src="../images/aca-logo.png" />}
      orgtitle="Atheist Community of Austin"
      orglink="https://www.atheist-community.org/Volunteer-for-the-ACA"
      dates="November 2021 to Present"
      positiontitle="Video Engineer Trainee"
    />
    <VolunteerItem
      image={<StaticImage alt="Green Light New Orleans rain barrels" src="../images/greenlight.jpg" />}
      orgtitle="Green Light New Orleans"
      orglink="https://www.greenlightneworleans.org/volunteerapply.html"
      dates="April 2021 to Present"
      positiontitle="Rain Barrel Prep"
    />
    <VolunteerItem
      image={<StaticImage alt="Boys Hope Girls Hope Logo" src="../images/bhgh-logo.png" />}
      orgtitle="Boys Hope Girls Hope"
      orglink="https://bhghnola.org/connect/"
      dates="October 2018 to September 2019"
      positiontitle="Tutor"
    />
    <VolunteerItem
      image={<StaticImage alt="Anna's Place Logo" src="../images/annas-place-logo.jpg" />}
      orgtitle="Anna's Place After School Program"
      orglink="https://annasplacenola.org/get-involved/"
      dates="September 2018 to May 2019"
      positiontitle="After School Program Assistant"
    />

  </Layout>
)

export default VolunteeringPage