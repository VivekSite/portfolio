import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import SkillsPage from './Components/Pages/SkillsPage';
import ProjectsPage from './Components/Pages/ProjectsPage';
import ContactPage from './Components/Pages/ContactPage';
import ServicesPage from './Components/Pages/ServicesPage';
import ErrorPage from './Components/Pages/ErrorPage';
import Resume from "./Components/Pages/Resume";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio/" element={<HomePage />} />
        <Route path="/portfolio/skills" element={<SkillsPage />} />
        <Route path="/portfolio/projects" element={<ProjectsPage />} />
        <Route path="/portfolio/resume" element={<Resume />} />
        <Route path="/portfolio/contact" element={<ContactPage />} />
        <Route path="/portfolio/services" element={<ServicesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
