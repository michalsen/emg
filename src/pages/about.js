import React from "react"
import me from "../assets/images/me_train.jpg";

import Image from 'gatsby-image';
import { graphql } from "gatsby";

const AboutPage = () => (
  <main>
    <div class="main_top"></div>
    <div id="about_text">
        A recent arrival to Kentucky, I spend my days in Drupal and Wordpress,
        and my evenings, weekends, and offdays with the family ... and in my shop.
 
        <hr></hr>
        My twitter feed tends to be more business and webops, while my Instagram tends
        to lean more towards the watchmaking and shop life.
    </div>
    <div id="me_image">

      <img src={me} alt="Lagrange" />

    </div>
    <div class="main_bottom"></div>
  </main>
)
export default AboutPage


