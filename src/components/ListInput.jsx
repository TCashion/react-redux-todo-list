import { useRef } from "react";

const ListInput = (props) => {
  const { dispatchAddTodo } = props;
  const listInputRef = useRef(null);

  function handleClick() {
    dispatchAddTodo(listInputRef.current.value);
  }

  return (
    <div>
      <input ref={listInputRef} type="text" placeholder="Add a todo" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default ListInput;
