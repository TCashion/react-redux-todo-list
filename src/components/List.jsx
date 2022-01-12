const List = (props) => {
  const { todoItems, dispatchToggleCompleted, dispatchDeleteTodo } = props;

  function handleButtonClick(todoItemId) {
    dispatchToggleCompleted(todoItemId);
  }

  function handleDeleteClick(todoItemId) {
    dispatchDeleteTodo(todoItemId);
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
