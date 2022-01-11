import { useRef } from "react";

const ListInput = (props) => {
  const { addToDo } = props;
  const listInputRef = useRef(null);

  function handleClick() {
    const newTodoItem = listInputRef.current.value;
    addToDo(newTodoItem);
  }

  return (
    <div>
      <input ref={listInputRef} type="text" placeholder="Add a todo" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default ListInput;
