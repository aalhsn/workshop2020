import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class StudentDetails extends Component {
  state={
    student:""
  }
  componentDidMount(){
    let student = this.props.students.find(student => student.id === parseInt(this.props.match.params.studentID));
    this.setState({student})
  }
 
  render() {
    
    return (
      <div class="jumbotron">
        <h1 class="display-4">{this.state.student.name}</h1>
        <p class="lead">
        {this.state.student.hobbies}
        </p>

        <p>
        {this.state.student.date_of_birth}
        </p>
        <Link to="/students" className="btn btn-secondary">Back</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  };
};

export default connect(mapStateToProps)(StudentDetails);