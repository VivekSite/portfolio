import React, { useState, useEffect } from "react";
import ActiveLink from "./ActiveLink";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ClickAwayListener from "@mui/material/ClickAwayListener";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };


  

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    const handleLinkClick = () => {
      if (isOpen) {
        closeNavbar();
      }
    };

    const navbarLinks = Array.from(document.querySelectorAll(".MenuOpen .col"));
    navbarLinks.forEach((link) =>
      link.addEventListener("click", handleLinkClick)
    );

    return () => {
      window.removeEventListener("resize", handleResize);
      navbarLinks.forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
    };
  }, [isOpen]);




  return (
    <>
      <ClickAwayListener onClickAway={closeNavbar}>
        <div className="container py-4">
          <div className="container text-center position-fixed">
            <div className="row">
              <div
                className="col-6"
                style={{
                  textAlign: "left",
                  fontSize: "1.5rem",
                  paddingLeft: "0",
                }}
              >
                MyWebsite
              </div>
              <div className="col-6 menu-right px-md-4 px-sm-4 px-4">
                <div
                  className={`menu ${isOpen ? "open" : ""}`}
                  style={{ display: deviceWidth > 1200 ? "block" : "" }}
                >
                  <div className="row MenuOpen">
                    <div className="col">
                      {<ActiveLink to="MyWebsite/">Home</ActiveLink>}
                    </div>
                    <div className="col">
                      {<ActiveLink to="MyWebsite/blogs">Blogs</ActiveLink>}
                    </div>
                    <div className="col">
                      {<ActiveLink to="MyWebsite/skills">Skills</ActiveLink>}
                    </div>
                    <div className="col">
                      {
                        <ActiveLink to="MyWebsite/services">
                          Services
                        </ActiveLink>
                      }
                    </div>
                    <div className="col">
                      {
                        <ActiveLink to="MyWebsite/projects">
                          Projects
                        </ActiveLink>
                      }
                    </div>
                    <div className="col">
                      {
                        <ActiveLink to="MyWebsite/contact">
                          ContactMe
                        </ActiveLink>
                      }
                    </div>
                  </div>
                </div>
                <button
                  style={{
                    display: deviceWidth < 1200 ? "block" : "none",
                    height: "50px",
                  }}
                  className="btn btn-outline-primary"
                  onClick={toggleNavbar}
                >
                  {isOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
}
