import React from "react";
import Layout from "../Layout/Layout";
import ProjectsCard from "../Cards/ProjectsCard";

export default function Projects() {
  return (
    <Layout>
      <div id="ProjectsContainer">
        <ProjectsCard bgColor='#FFC0C7' source={require('./../../Images/portfolio.png')}>
          <h1>My Portfolio Website <a href="https://viveksite.github.io/portfolio/" target="_blank" rel="noreferrer">visit site</a> </h1>
          <p>In this project I've created my portfolio website.</p><br />
          <h3>Technology used :</h3>
          <p>RectJS</p>
          <p>CSS</p>
          <p>Lorem Picsum</p>
          
        </ProjectsCard>

        <ProjectsCard bgColor='#E7E9EB' source={require('./../../Images/image_generator.png')}>
          <h1>Image Generator <a href="https://viveksite.github.io/image_generator/" target="_blank" rel="noreferrer">visit site</a> </h1>
          <p>In this project I've created a image generator which generators images on the bases of given choices.</p><br />
          <h3>Technology used :</h3>
          <p>RectJS</p>
          <p>CSS</p>
          <p>Pixels Image API</p>
          <p>axios</p>

        </ProjectsCard>

        <ProjectsCard bgColor='#FFF4A3' source={require('./../../Images/register_login_page.png')} >
          <h1>Register/Login System <a href="https://dark-gray-kangaroo-gear.cyclic.app/" target="_blank" rel="noreferrer">visit site</a> </h1>
          <p>In this project I've created Register and login system. On which users can share their information to SignUp on platform</p>
          <h3>Technology used :</h3>
          <p>ReactJS</p>
          <p>NodeJS</p>
          <p>MongoDB</p>
          <p>axios</p>
          <p>cyclic for deploment</p>
        </ProjectsCard>
      </div>
    </Layout>
  );
}
