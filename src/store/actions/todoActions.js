import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  READ_TODO,
} from "./../constants/types";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};
