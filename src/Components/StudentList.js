import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Components
import StudentCard from "./StudentCard";
//Actions
import { fetchStudents } from "../redux/actions";

class StudentList extends Component {
  render() {
    const cards = this.props.students.map((student) => (
      <StudentCard student={student} key={student.id} />
    ));
    return (
      <div class="container">
        <h1 class="my-4">
          {`Students List (total: ${this.props.students.length})`}
          <Link to="/" className="btn btn-warning ml-5">Homepage</Link>
          <br></br>
        </h1>
        <div className="col-6">{cards}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  };
};

export default connect(mapStateToProps)(StudentList);
