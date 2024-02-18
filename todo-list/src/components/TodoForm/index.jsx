import { useState } from "react";
import "./style.css";

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
      <input
        value={value}
        type="text"
        placeholder="Add Todo..."
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="form-submit-button" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
