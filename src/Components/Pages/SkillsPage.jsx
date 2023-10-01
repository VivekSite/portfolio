import React from 'react';
import Layout from '../Layout/Layout';
import SkillCard from '../Cards/SkillCard';

export default function Skills() {
  //FFF4A3  yellow 96D4D4 blue
  return (
    <Layout> 
      <div className='skill-heading'>
        <h3><center>I am a full-stack developer with a background in web development and a passion for learning new technologies.</center></h3>
      </div>
      <div id="cardsContainer">
        <SkillCard bgColor='#FFC0C7' color='black' name='HTML' sDescriprion='Hyper Text Markup Language' />
        <SkillCard bgColor='#E7E9EB' color='black' name='CSS' sDescriprion='The language for styling web pages' />
        <SkillCard bgColor='#FFF4A3' color='black' name='JavaScript' sDescriprion='The language for programming web pages' />
        <SkillCard bgColor='#D9EEE1' color='black' name='SQL' sDescriprion='A language for accessing databases' />
        <SkillCard bgColor='#FFC0C7' color='black' name='MySQL' sDescriprion='widely used relational database management system' />
        <SkillCard bgColor='#E7E9EB' color='black' name='jQuery' sDescriprion='A JS library for developing web pages' />
        <SkillCard bgColor='#FFF4A3' color='black' name='Bootstrap' sDescriprion='A CSS framework for designing better web pages' />
        <SkillCard bgColor='#D9EEE1' color='black' name='JSON' sDescriprion='JavaScript Object Notation for storing and transporting data' />
        <SkillCard bgColor='#FFC0C7' color='black' name='MongoDB' sDescriprion='document database, stores data in JSON format' />
        <SkillCard bgColor='#96D4D4' color='black' name='Express' sDescriprion='A JS library for creating single page apps' />
        <SkillCard bgColor='#FFF4A3' color='black' name='Node.JS' sDescriprion='open source server environment' />
        <SkillCard bgColor='#D9EEE1' color='black' name='React' sDescriprion='JavaScript library for building user interfaces' />
        <SkillCard bgColor='#F3ECEA' color='black' name='Git' sDescriprion='version control system' />
        <SkillCard bgColor='#96D4D4' color='black' name='GitHub' sDescriprion='code hosting platform for collaboration and version control.' />
        <SkillCard bgColor='#FFF4A3' color='black' name='Java' sDescriprion='A programming language' />
        <SkillCard bgColor='#FFC0C7' color='black' name='C++' sDescriprion='A programming language' />
        <SkillCard bgColor='#F3ECEA' color='black' name='Python' sDescriprion='A popular programming language' />
        <SkillCard bgColor='#96D4D4' color='black' name='Excel' sDescriprion='powerful tool to use for mathematical functions' />
      </div>
    </Layout>
  )
}
