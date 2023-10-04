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

        <ProjectsCard bgColor='#FFF4A3' source={require('./../../Images/bg1.png')} >
          <h1>Project Heading</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus hic aperiam fugit minima, temporibus blanditiis corporis excepturi tempore dolorum id optio, nam odio. Est, animi. Hic voluptatibus corporis rem fugit neque? Consequuntur, impedit consequatur. Ex cum vitae ullam. Consequuntur.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus hic aperiam fugit minima, temporibus blanditiis corporis excepturi tempore dolorum id optio, nam odio. Est, animi. Hic voluptatibus corporis rem fugit neque? Consequuntur, impedit consequatur. Ex cum vitae ullam. Consequuntur.</p>
        </ProjectsCard>
        
        <ProjectsCard bgColor='#96D4D4' source={require('./../../Images/bg3.png')} >
          <h1>Project Heading</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus hic aperiam fugit minima, temporibus blanditiis corporis excepturi tempore dolorum id optio, nam odio. Est, animi. Hic voluptatibus corporis rem fugit neque? Consequuntur, impedit consequatur. Ex cum vitae ullam. Consequuntur.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus hic aperiam fugit minima, temporibus blanditiis corporis excepturi tempore dolorum id optio, nam odio. Est, animi. Hic voluptatibus corporis rem fugit neque? Consequuntur, impedit consequatur. Ex cum vitae ullam. Consequuntur.</p>
        </ProjectsCard>

        <ProjectsCard bgColor='#D9EEE1' source={require('./../../Images/image1.jpg')} >
          <h1>Project Heading</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus hic aperiam fugit minima, temporibus blanditiis corporis excepturi tempore dolorum id optio, nam odio. Est, animi. Hic voluptatibus corporis rem fugit neque? Consequuntur, impedit consequatur. Ex cum vitae ullam. Consequuntur.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus hic aperiam fugit minima, temporibus blanditiis corporis excepturi tempore dolorum id optio, nam odio. Est, animi. Hic voluptatibus corporis rem fugit neque? Consequuntur, impedit consequatur. Ex cum vitae ullam. Consequuntur.</p>
        </ProjectsCard>
      </div>
    </Layout>
  );
}
