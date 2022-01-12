import "./App.css";
import List from "./components/List";
import ListInput from "./components/ListInput";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleCompleted,
  selectAllTodos,
} from "./components/listSlice";

function App() {
  const todoItems = useSelector(selectAllTodos);
  const dispatch = useDispatch();

  const dispatchAddTodo = (newTodoItemDesc) => {
    if (newTodoItemDesc.length) {
      dispatch(
        addTodo({
          description: newTodoItemDesc,
          completed: false,
          id: todoItems.length,
        })
      );
    }
  };

  const dispatchToggleCompleted = (todoItemId) => {
    dispatch(toggleCompleted(todoItemId));
  };

  const dispatchDeleteTodo = (todoItemId) => {
    dispatch(deleteTodo(todoItemId));
  };

  return (
    <div className="App">
      <h1>TO DO:</h1>
      <List
        todoItems={todoItems}
        dispatchToggleCompleted={dispatchToggleCompleted}
        dispatchDeleteTodo={dispatchDeleteTodo}
      />
      <ListInput dispatchAddTodo={dispatchAddTodo} />
    </div>
  );
}

export default App;
