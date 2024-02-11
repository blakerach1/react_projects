import { useState } from "react";

function TodoForm(props) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      return;
    }
    props.addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Todo..." />
    </form>
  );
}

export default TodoForm;
