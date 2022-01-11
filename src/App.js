import { useState } from "react";
import "./App.css";
import List from "./components/List";
import ListInput from "./components/ListInput";

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

function App() {
  const [todoItems, setTodoItems] = useState(todoItemsData);

  const addToDo = (newTodoItem) => {
    if (newTodoItem.length) {
      setTodoItems([
        ...todoItems,
        {
          description: newTodoItem,
          completed: false,
          id: todoItems.length,
        },
      ]);
    }
  };

  const toggleComplete = (todoItemId) => {
    let itemIndex;
    let items = [...todoItems];
    const todoItem = todoItems.filter((item, idx) => {
      if (item.id === todoItemId) {
        itemIndex = idx;
      }
      return item.id === todoItemId;
    })[0];
    const updatedTodoItem = { ...todoItem, completed: !todoItem.completed };
    items[itemIndex] = updatedTodoItem;
    setTodoItems(items);
  };

  const deleteItem = (todoItemId) => {
    let itemIndex;
    let items = [...todoItems];
    todoItems.forEach((item, idx) => {
      if (item.id === todoItemId) {
        itemIndex = idx;
      }
    });
    items.splice(itemIndex, 1);
    setTodoItems(items);
  };

  return (
    <div className="App">
      <h1>TO DO:</h1>
      <List
        todoItems={todoItems}
        toggleComplete={toggleComplete}
        deleteItem={deleteItem}
      />
      <ListInput addToDo={addToDo} />
    </div>
  );
}

export default App;
