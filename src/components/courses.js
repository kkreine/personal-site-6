import React from "react"
import { coursestyle } from "./courses.module.css"
import { coursestylecontainer } from "./courses.module.css"
import Layout2 from "../components/layout2"
import Seo from "../components/seo"
import ColoredLink from "./colored-link"
import PinkText from "./pink-text"

const ExperienceItem = (props) => (
  // edits: change this to iterate through all of the props
  <Layout2>
    <p><strong>
      <PinkText text="Java Code Immersion - Tech Talent South" />
    </strong>
      <em>fundamentals of HTML, CSS, Bootstrap, SQL, Git <br></br>
        build and deploy Twitter-like application in Java using Heroku and Spring Boot
      </em>
    </p>
    <p><strong>
      <PinkText text="Independent Study - Open Source Development" />
    </strong>
      <em>read several texts, including Working in Public by Nadia Eghbal, related to open source <br></br>
        contribute to various open source projects
      </em>
    </p>
    <p><strong>
      <PinkText text="Software Engineering" />
    </strong>
      <em>worked on a team in backend, front end, and management roles to build a Java-based voting machine
      </em>
    </p>
    <p><strong>
      <PinkText text="Internet Technologies" />
    </strong>
      <em>built a React-based <ColoredLink linktext="https://github.com/kkreine/garden-helper-app" text="web application" /> to render plant data fetched from an api
      </em>
    </p>
    <p><strong>
      <PinkText text="Udemy 2020 Complete Ruby on Rails Bootcamp" />
    </strong>
      <em>fundamentals of Ruby and Rails <br></br>
        build and deploy <ColoredLink linktext="https://github.com/kkreine/orbit001" text="social media web application" />
      </em>
    </p>
    <p><strong>
      <PinkText text="Machine Learning" />
    </strong>
      <em>used machine learning algorithms for <ColoredLink linktext="https://github.com/kkreine/knn-digit-recognition" text="digit recognition" />, <ColoredLink linktext="https://github.com/kkreine/heart-disease-nn" text="heart disease prediction" />, predicting <ColoredLink linktext="https://github.com/kkreine/predicting-tumors" text="benign/malignant tumors" />, and predicting <ColoredLink linktext="https://github.com/kkreine/logistic-regression-ex" text="college acceptance" />
      </em>
    </p>

    <ul>
      <li><PinkText text="Digital Forensics" /></li>
      <li><PinkText text="Object-Oriented Programming" /></li>
      <li><PinkText text="Game Programming" /></li>
      <li><PinkText text="Computer Organization" /></li>
      <li><PinkText text="Data Structures" /></li>
      <li><PinkText text="Intro to Relational Databases" /></li>
      <li><PinkText text="Cryptography (currently enrolled)" /></li>
      <li><PinkText text="Computing Ethics (currently enrolled)" /></li>
    </ul>
  </Layout2>

)

export default ExperienceItem