import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchStudents } from "./actions";
import reducer from "./reducers/studentReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchStudents());

export default store;
