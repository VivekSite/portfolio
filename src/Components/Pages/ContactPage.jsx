import React from "react";
import Layout from "../Layout/Layout";
import SkillCard from "../Cards/SkillCard";
import {InputBox, SubmitBtn, TextArea} from "../Cards/InputBox";

export default function ContactUs() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Layout>
      <a href='https://www.linkedin.com/in/vivek-sahani-ab8b2b220/' rel="noreferrer" target="_blank">
        <SkillCard bgColor='#96D4D4' color='black' name='LinkedIn' />
      </a>
      <a href='https://twitter.com/VIVEK_KUMAR2003' rel="noreferrer" target="_blank">
        <SkillCard bgColor='#FFF4A3' color='black' name='Twitter' />
      </a>
      <a href='https://www.instagram.com/vivek39266/' rel="noreferrer" target="_blank">
        <SkillCard bgColor='#D9EEE1' color='black' name='Instagram' />
      </a>
      <a href='https://github.com/VivekSite' rel="noreferrer" target="_blank">
        <SkillCard bgColor='#FFC0C7' color='black' name='GitHub' />
      </a>
      <form action="submit" id="contact-form" onSubmit={handleSubmit}>
        <InputBox type='email' bgColor='#FFC0C7' color='black' placeholder='Enter Your Email'/>
        <InputBox type='text' bgColor='#96D4D4' color='black' placeholder='Enter Your Name'/>
        <TextArea bgColor='#FFF4A3' color='black' placeholder='Enter Your Message' rows={4} />
        <SubmitBtn name='Submit' bgColor='D9EEE1' color='black' />
      </form>
    </Layout>
  )
}
