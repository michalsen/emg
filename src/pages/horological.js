import React from "react";
import watch from "../assets/images/watch.jpg";
import liverpool from "../assets/images/liverpool.jpg";
import me from "../assets/images/me_lathebw.jpg";


const HorologicalPage = () => (
  <main>
    <div class="main_top"></div>
    <div id="horological_textt">
    <ul>
      <li>You can follow progress on various projects <a href="https://michalsen.wordpress.com/" target="_blank">here</a></li>
      <li>Secretary, NAWCC Chapter 35</li>
      <li>Self-taught watchmaker</li>
      <li><img src={me} alt="Shop" /><img src={liverpool} alt="Shop" /></li>
      <li><img src={watch} alt="Shop" /></li>
    </ul>
    <div class="main_bottom"></div>
    </div>
  </main>
)
export default HorologicalPage