import React from "react";
// import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
