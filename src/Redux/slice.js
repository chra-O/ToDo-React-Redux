import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  todos: [],
};

const slice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
    isComplet: (state, action) => {
      state.todos[action.payload].isCompleted =
        !state.todos[action.payload].isCompleted;
    },
  },
});

export const { addTodo, removeTodo, isComplet } = slice.actions;
export default slice.reducer;
