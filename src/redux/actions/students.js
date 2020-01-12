import * as actionTypes from "./actionsTypes";
import instance from "./instance";

export const fetchStudents = () => async (dispatch) => {
  try {
    const res = await instance.get("students/");
    const students = res.data;
    dispatch({ type: actionTypes.GET_STUDENTS, payload: students });
  } catch (error) {
    console.error(error);
  }
};

export const addStudent = (student, history) => async (dispatch) => {
  try {
    const res = await instance.post("students/add/", student);
    dispatch({ type: actionTypes.ADD_STUDENT, payload: res.data });
    history.replace("/");
  } catch (error) {
    console.error(error);
  }
};
