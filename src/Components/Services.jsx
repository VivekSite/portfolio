import React from "react";

export default function Services() {
  return (
    <div className="container py-5">


      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="display-3 mb-4">My Services</h2>
          <p className="lead text-muted mb-4">
          I am a full-stack developer with a background in web development and a passion for learning new technologies.
          </p>
          <p>For now I provide following services</p>
          <hr className="my-4" />
        </div>




        <div className="row my-4">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-laptop-code"></i> Web Development
                </h5>
                
                <p className="card-text">
                  I can create Basic web applications using  <strong> HTML, CSS, SCSS, JavaScript</strong>  <br/>
                  <strong>Bootstrap</strong><br/>
                  <strong>Wordpress</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-laptop-code"></i> React Apps
                </h5>
                <p className="card-text">
                  I can create Single Page Wbsites using ReactJS and <strong>Material UI Framework of NodeJS</strong><br/>
                  This whole website is created using <strong>ReactJS Components</strong> <br/>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-laptop-code"></i>Hosting
                </h5>
                <p className="card-text">
                  Host your website with <strong>hostinger</strong>   <br/>
                  This website is hosted to <strong>GitHub</strong> <br/>
                </p>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  );
}
