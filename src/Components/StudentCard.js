import React, { Component } from "react";
import { Link } from "react-router-dom";

class StudentCard extends Component {
  render() {
    return (
      <>
        <div class="card">
          <div class="card-header"></div>
          <div class="card-body">
            <h5 class="card-title">{this.props.student.name}</h5>
            <Link
              class="btn btn-primary text-right"
              to={`/students/${this.props.student.id}`}
            >
             Details
            </Link>
          </div>
        </div>
        <br></br>
      </>
    );
  }
}

export default StudentCard;
