import React from 'react'

const AboutPage = () => {
  return (
    <div id='AboutSection'>
        <div id='Image-Section'>
            <img src={require("./../../Images/vivek_image_square.jpeg")}alt="vivek" />
        </div>
        <div id='Content-Section'>
            <h1>Hi, <span className='color-text'>There</span></h1>
            <h1>My name is <span className='color-text'>Vivek Sahani</span></h1>
            <h3>Full-Stack Developer</h3>
            <p className='content-para'>
            I am Full Stack Developer based in India. I'm pursuing Bachelor's of Computer Science and Engineering from FunctionUp School of Technology (Starex University). I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.
            </p>
            <br />
            <p><span style={{color: "#006eff", fontWeight: "bold"}}>Email:</span> vivek39266@gmail.com</p>
        </div>
    </div>
  )
}

export default AboutPage;