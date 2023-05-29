import React from "react";
import ActiveLink from "./ActiveLink";

export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="container text-center position-fixed">
          <div className="row">
            <div
              className="col-6"
              style={{ textAlign: "left", fontSize: "1.5rem",paddingLeft:'0' }}
            >
              MyWebsite
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col">
                  {<ActiveLink to="/">Home</ActiveLink>}
                </div>
                <div className="col">
                  {<ActiveLink to="/blogs">Blogs</ActiveLink>}
                </div>
                <div className="col">
                  {<ActiveLink to="/skills">Skills</ActiveLink>}
                </div>
                <div className="col">
                  {<ActiveLink to="/services">Services</ActiveLink>}
                </div>
                <div className="col">
                  {<ActiveLink to="/projects">Projects</ActiveLink>}
                </div>
                <div className="col">
                  {<ActiveLink to="/contact">ContactMe</ActiveLink>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
