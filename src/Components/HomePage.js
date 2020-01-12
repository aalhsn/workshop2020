import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="row no-gutter">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
              <h3 className="login-heading text-center mb-4">Hello Guys!</h3>
              <Link
                to="students/"
                className="btn btn-lg btn-primary btn-block btn-login text-uppercase rounded-pill font-weight-bold mb-2"
              >
                View All Students
              </Link>
              <Link
                to="/add"
                className="btn btn-lg btn-outline-success btn-block btn-login text-uppercase rounded-pill font-weight-bold mb-2"
              >
                Add New Student
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
