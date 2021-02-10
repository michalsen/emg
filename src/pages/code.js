import React from "react";
import aquia from "../assets/images/aquia_certified_developer.png";

const BragPage = () => (
  <main>
     <div class="main_top"></div>
     <div id="about_text">
      <center>
      <h3>PHP/MySQL/JS/Drupal/Wordpress</h3>
      <h3>Focusing on solutions for unique requirements</h3>
      <img src={aquia} alt="Aquia Certified Backend Developer" />
      </center>
      </div>
      <div id="about_text">
        <ul>
          <li>25 years in the IT business</li>
          <li>Backend development specializing in working with clients custom data and mapping to API's.</li>
          <li>Problem solving using industry standards</li>
      </ul>
      <hr></hr>
      <ul>
          <li><a href="mailto:eric.michalsen@gmail.com">Email</a></li>
          <li><a href="https://www.linkedin.com/in/michalsen/" target="_blank">Linkedin</a></li>
          <li><a href="https://github.com/michalsen" target="_blank">Github</a></li>
          
      </ul>
      <hr></hr>
      <ul>
          <li>Drupal</li>
          <li>Wordpress</li>
          <li>git/CI/DTAP environments</li>
          <li>This site made in GatsbyJS</li>
      </ul>
      
    </div>
    <div class="main_bottom"></div>
  </main>
)
export default BragPage