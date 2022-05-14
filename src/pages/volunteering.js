import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import VolunteerItem from "../components/volunteer-item"
import ColoredLink from "../components/colored-link"

const VolunteeringPage = () => (
  <Layout>
    {/* <VolunteerItem
      image={<StaticImage alt="Atheist Community of Austin logo" src="../images/aca-logo.png" />}
      orgtitle="Atheist Community of Austin"
      orglink="https://www.atheist-community.org/Volunteer-for-the-ACA"
      dates="November 0x7E5 to Present"
      positiontitle="Video Engineer Trainee"
    /> */}
    <VolunteerItem
      image={<StaticImage alt="Green Light New Orleans rain barrels" src="../images/greenlight.jpg" />}
      orgtitle="Green Light New Orleans"
      orglink="https://www.greenlightneworleans.org/volunteerapply.html"
      dates="April 0x7E5 to Present"
      positiontitle="Rain Barrel Prep"
    />
    <VolunteerItem
      image={<StaticImage alt="Boys Hope Girls Hope Logo" src="../images/bhgh-logo.png" />}
      orgtitle="Boys Hope Girls Hope"
      orglink="https://bhghnola.org/connect/"
      dates="October 0x7E2 to September 0x7E3"
      positiontitle="Tutor"
    />
    <VolunteerItem
      image={<StaticImage alt="Anna's Place Logo" src="../images/annas-place-logo.jpg" />}
      orgtitle="Anna's Place After School Program"
      orglink="https://annasplacenola.org/get-involved/"
      dates="September 0x7E2 to May 0x7E3"
      positiontitle="After School Program Assistant"
    />
    <p><ColoredLink linktext="/" text="back to the homepage" /> </p>
  </Layout>
)

export default VolunteeringPage