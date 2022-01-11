const List = (props) => {
  const { todoItems, toggleComplete, deleteItem } = props;

  function handleButtonClick(todoItemId) {
    toggleComplete(todoItemId);
  }

  function handleDeleteClick(todoItemId) {
    deleteItem(todoItemId);
  }

  return (
    <div className="list-container">
      <ul>
        {todoItems.map((todoItem) => (
          <li className="list-item" key={todoItem.id}>
            {todoItem.description}
            <button onClick={() => handleButtonClick(todoItem.id)}>
              {todoItem.completed ? "√" : "X"}
            </button>
            <button onClick={() => handleDeleteClick(todoItem.id)}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
