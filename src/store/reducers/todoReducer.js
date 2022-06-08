import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  READ_TODO,
} from "./../constants/types";
let initialState = {
  todos: [
    {
      title: "Abu hurairah",
    },
    {
      title: "Asifa Rizwan",
    },
    {
      title: "Fatima Rasheed",
    },
    {
      title: "Hafsa Noor",
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todoReducer;
