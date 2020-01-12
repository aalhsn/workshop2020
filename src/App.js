import React from "react";
import "./App.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./Components/HomePage";
import StudentForm from "./Components/StudentForm";
import Loading from "./Components/Loading";
import StudentList from "./Components/StudentList";
import StudentDetails from "./Components/StudentDetails";

function App({ loading }) {
  const getView = () => {
    if (loading) return <Loading />;
    return (
      <div className="container-fluid">
        <Switch>
          <Redirect exact from="/" to="/homepage" />
          <Route exact path="/students/:studentID" component={StudentDetails} />
          <Route path="/add" component={StudentForm} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/students" component={StudentList} />
          
          )} />
        </Switch>
        <footer
          id="sticky-footer "
          className="fixed-bottom py-1 bg-dark text-white-50"
        >
          <div className="container-fluid text-center">
            <small>Copyright &copy; Abdullah Alhasan 2020</small>
          </div>
        </footer>
      </div>
    );
  };
  return (
    <div>
      <div>{getView()}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  };
};

export default withRouter(connect(mapStateToProps)(App));
