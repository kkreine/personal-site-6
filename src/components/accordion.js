
import React from "react"
import Layout2 from "./layout2"
import { Link } from "gatsby"
import { accordions, panel } from "./accordion.module.css"

const Accordion = (props) => {
  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} return (
  <Layout2>
    <button className={accordions}>Section 1</button>
    <div className={panel}>
      <p>Lorem ipsum...</p>
    </div>

    <button className={accordions}>Section 2</button>
    <div className={panel}>
      <p>Lorem ipsum...</p>
    </div>

    <button className={accordions}>Section 3</button>
    <div className={panel}>
      <p>Lorem ipsum...</p>
    </div>
  </Layout2>
)}

export default Accordion

