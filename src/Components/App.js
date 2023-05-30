import React from "react";
// import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import Blogs from "./Blogs";
import ContactUs from "./ContactUs";
import Services from "./Services";
import Error from "./Error";
import Navbar from "./Navbar";
import Projects from "./Projects";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="MyWebsite/" element={<Home />} />
        <Route path="MyWebsite/skills" element={<Skills />} />
        <Route path="MyWebsite/projects" element={<Projects />} />
        <Route path="MyWebsite/blogs" element={<Blogs />} />
        <Route path="MyWebsite/contact" element={<ContactUs />} />
        <Route path="MyWebsite/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
