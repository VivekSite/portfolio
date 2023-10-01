import React from "react";
import Layout from "../Layout/Layout";
import ProjectsCard from "../Cards/ProjectsCard";

export default function Projects() {
  return (
    <Layout>
      <div id="ProjectsContainer">
        <ProjectsCard bgColor='#FFC0C7' source={require('./../../Images/bg1.png')} >
          <h1>Project Heading</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus hic aperiam fugit minima, temporibus blanditiis corporis excepturi tempore dolorum id optio, nam odio. Est, animi. Hic voluptatibus corporis rem fugit neque? Consequuntur, impedit consequatur. Ex cum vitae ullam. Consequuntur.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus hic aperiam fugit minima, temporibus blanditiis corporis excepturi tempore dolorum id optio, nam odio. Est, animi. Hic voluptatibus corporis rem fugit neque? Consequuntur, impedit consequatur. Ex cum vitae ullam. Consequuntur.</p>
        </ProjectsCard>

        <ProjectsCard bgColor='#E7E9EB' source={require('./../../Images/bg2.png')} >
          <h1>Project Heading</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus hic aperiam fugit minima, temporibus blanditiis corporis excepturi tempore dolorum id optio, nam odio. Est, animi. Hic voluptatibus corporis rem fugit neque? Consequuntur, impedit consequatur. Ex cum vitae ullam. Consequuntur.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus hic aperiam fugit minima, temporibus blanditiis corporis excepturi tempore dolorum id optio, nam odio. Est, animi. Hic voluptatibus corporis rem fugit neque? Consequuntur, impedit consequatur. Ex cum vitae ullam. Consequuntur.</p>
        </ProjectsCard>

        <ProjectsCard bgColor='#FFF4A3' source={require('./../../Images/bg3.png')} >
          <h1>Project Heading</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus hic aperiam fugit minima, temporibus blanditiis corporis excepturi tempore dolorum id optio, nam odio. Est, animi. Hic voluptatibus corporis rem fugit neque? Consequuntur, impedit consequatur. Ex cum vitae ullam. Consequuntur.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus hic aperiam fugit minima, temporibus blanditiis corporis excepturi tempore dolorum id optio, nam odio. Est, animi. Hic voluptatibus corporis rem fugit neque? Consequuntur, impedit consequatur. Ex cum vitae ullam. Consequuntur.</p>
        </ProjectsCard>

        <ProjectsCard bgColor='#D9EEE1' source={require('./../../Images/image1.jpg')} >
          <h1>Project Heading</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus hic aperiam fugit minima, temporibus blanditiis corporis excepturi tempore dolorum id optio, nam odio. Est, animi. Hic voluptatibus corporis rem fugit neque? Consequuntur, impedit consequatur. Ex cum vitae ullam. Consequuntur.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus hic aperiam fugit minima, temporibus blanditiis corporis excepturi tempore dolorum id optio, nam odio. Est, animi. Hic voluptatibus corporis rem fugit neque? Consequuntur, impedit consequatur. Ex cum vitae ullam. Consequuntur.</p>
        </ProjectsCard>
        
        <ProjectsCard bgColor='#96D4D4' source={require('./../../Images/WebPhoto.png')} >
          <h1>Project Heading</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus hic aperiam fugit minima, temporibus blanditiis corporis excepturi tempore dolorum id optio, nam odio. Est, animi. Hic voluptatibus corporis rem fugit neque? Consequuntur, impedit consequatur. Ex cum vitae ullam. Consequuntur.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus hic aperiam fugit minima, temporibus blanditiis corporis excepturi tempore dolorum id optio, nam odio. Est, animi. Hic voluptatibus corporis rem fugit neque? Consequuntur, impedit consequatur. Ex cum vitae ullam. Consequuntur.</p>
        </ProjectsCard>
      </div>
    </Layout>
  );
}
