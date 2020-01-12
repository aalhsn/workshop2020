import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";

//Actions
import { addStudent } from "../redux/actions";

class StudentForm extends Component {
  state = {
    name: "",
    hobbies: "",
    date_of_birth: ""
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    this.props.addStudent(this.state, this.props.history);
    console.log(this.state);
  };

  render() {
    return (
      <div className="bgForm">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Add New Student!</h5>
                  <form className="form-signin" onSubmit={this.submitHandler}>
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="inputEmail"
                        className="form-control mb-3"
                        placeholder="What's your name?"
                        name="name"
                        onChange={this.changeHandler}
                        required
                      />
                      <label htmlFor="inputEmail">Name</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="What's your hobbies?"
                        name="hobbies"
                        onChange={this.changeHandler}
                        required
                      />
                      <label htmlFor="inputEmail">Hobbies</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="date"
                        format="YYYY-MM-DD"
                        className="form-control mb-3"
                        placeholder="What's your name?"
                        name="date_of_birth"
                        onChange={this.changeHandler}
                        required
                      />
                      <label htmlFor="inputEmail">Date of Birth</label>
                    </div>

                    <button
                      className="btn btn-md rounded-pill
                       btn-success btn-block text-uppercase"
                      type="submit"
                    >
                      ADD
                    </button>
                    <Link to="/" className="btn btn-small btn-link">
                      Back to Homepage?
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (student, history) => dispatch(addStudent(student, history))
  };
};

export default connect(null, mapDispatchToProps)(StudentForm);
