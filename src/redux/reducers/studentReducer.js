import { GET_STUDENTS, ADD_STUDENT } from "../actions/actionsTypes";

const initialState = {
  students: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      const students = action.payload;
      return {
        ...state,
        students: students,
        loading: false
      };
    case ADD_STUDENT:
      return {
        ...state,
        students: state.students.concat(action.payload),
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
