import { createSlice } from "@reduxjs/toolkit";

const todoItemsData = [
  {
    description: "Buy milk",
    completed: false,
  },
  {
    description: "Mow lawn",
    completed: false,
  },
  {
    description: "Sweep floor",
    completed: true,
  },
  {
    description: "Feed dogs",
    completed: false,
  },
].map((todoItem, idx) => {
  return {
    ...todoItem,
    id: idx,
  };
});

// slices are like modules in Vuex.
// createSlice from the toolkit uses the immer library that
// allows us to concisely write logic to immutably update state.
// You can only do this inside createSlice and createReducer,
// otherwise you have to use the spread operator to update state
export const slice = createSlice({
  name: "todo",
  initialState: {
    todos: todoItemsData,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const itemIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos.splice(itemIndex, 1);
      return state;
    },
    toggleCompleted: (state, action) => {
      const itemIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      const todoItem = state.todos[itemIndex];
      const updatedTodoItem = { ...todoItem, completed: !todoItem.completed };
      state.todos[itemIndex] = updatedTodoItem;
      return state;
    },
  },
});

/** Selector function for finding a todo item */
export const selectAllTodos = (state) => {
  return state.list.todos; // QQ: where does the `list` name come from?
};

export const { addTodo, deleteTodo, toggleCompleted } = slice.actions;

export default slice.reducer;
