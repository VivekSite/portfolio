import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="container py-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <h1 className="display-4 text-center">
                  Welcome to <span className="font-weight-bold">
                    <span className="text-primary">My site</span>
                  </span>
                </h1>
                <p className="lead text-center">
                  This website is created using <span className="font-weight-bold">
                    <span className="text-primary">ReactJS</span>
                  </span>
                </p>
                <p className="lead text-center">
                  <span className="text-danger">Website is under construction</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
