import axios from "axios";
import { url } from "../../api";

export const addTodo = (todo) => {
  return (dispatch, getState) => {
    axios
      .post(`${url}/todos`, todo)
      .then((todo) => {
        dispatch({
          type: "ADD_TOD0",
          todo,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};
