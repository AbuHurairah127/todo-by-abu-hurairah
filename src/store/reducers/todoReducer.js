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
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      let newTodos = [...state.todos, action.payload];
      return {
        todos: newTodos,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
