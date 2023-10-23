import React from 'react'
import Layout from '../Layout/Layout'
import { NavLink } from 'react-router-dom';


const Resume = () => {
  return (
    <Layout>
      <div id="resume-body">
        <div className='resume-title' style={{textAlign:'center'}}>
          <h2>Vivek Sahani</h2>
          <h5 style={{color:'#b6b6b6'}}>MERN Stack Developer</h5>
        </div>

        <div className='details-section'>
          <img src={require('./../../Images/vivek.png')} alt=""/>
          <div className='about-section' style={{width:'100%'}}>
            <h2 className='resume-title' style={{marginTop:0}}>Education</h2>
            <ul type='none' style={{paddingLeft:'2rem'}}>
              <li>
                <h4>Bachelor Of Computer Science From The FucntioUP School of Technology</h4>
              </li>
            </ul>
          </div>
        </div>

        <div id='info-section'>
          <div className="skills">
            <h2 className='resume-title'>Skills</h2>
            <h3>Programming Laguages : <span>C++, Java, Python, JavaScript</span></h3>
            <h3>Libraries/Framworks : <span>Bootstrap, React, Express</span></h3>
            <h3>Platforms/Tools : <span>Ubuntu, MacOs, Windows, Terminal</span></h3>
            <h3>DataBases : <span>MySQL, MongoDB</span></h3>
            <h3>Web Development : <span>HTML, CSS, JS</span></h3>
            <h3>MERN Apps Development : <span>MongoDB, React, Express, NodeJS</span></h3>
            <h3><NavLink to='/portfolio/skills' style={{color:'#65cb49'}}>For More Information</NavLink></h3>
          </div>

          <div className="projects">
            <h2 className='resume-title'>Projects</h2>

            <h3><span><a href="https://viveksite.github.io/portfolio/" rel="noreferrer" target="_blank">My Portfolio Website</a></span></h3>

            <h3><span><a href="https://viveksite.github.io/image_generator/" rel="noreferrer" target="_blank">ImageGenerator</a></span></h3>

            <h3><span><a href="https://dark-gray-kangaroo-gear.cyclic.app/" rel="noreferrer" target="_blank">Register/Login System</a></span></h3>

            <h3><NavLink to='/portfolio/projects' style={{color:'#65cb49'}}>For More Projects</NavLink></h3>
          </div>
        </div>
        <div id="achievement" className='skills'>
          <h2 className='resume-title'>Achievements</h2>
          <h3>On Codewars : <span>Solved 300+ Questions</span></h3>
          <h3>On LeetCode : <span>Solved 10+ Questions</span></h3>
          <h3>On HackerEarth : <span>Solved 17+ Questions</span></h3>
          <h3>Typing Speed : <span>average-50wpm, max-70wpm</span></h3>
        </div>
      </div>
    </Layout>
  )
}

export default Resume