import { useRef, useState } from "react";

const ListInput = (props) => {
  const { dispatchAddTodo } = props;
  const listInputRef = useRef(null);

  const [inputValue, setInputValue] = useState("");

  function handleClick() {
    dispatchAddTodo(listInputRef.current.value);
  }

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  return (
    // TODO: the input value should live in state
    <div>
      <input
        ref={listInputRef}
        type="text"
        placeholder="Add a todo"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default ListInput;
