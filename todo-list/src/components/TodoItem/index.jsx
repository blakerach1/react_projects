import "./style.css";

function TodoItem(props) {
  return (
    <div className={`todo ${props.todo.isCompleted ? "complete" : ""}`}>
      <div>{props.index + 1}</div>
      <div className="todo-text">{props.todo.text}</div>
      <div>
        <button onClick={() => props.completeTodo(props.index)}>
          {props.todo.isCompleted ? "Completed" : "Complete"}
        </button>
        <button
          className="delete-button"
          onClick={() => props.removeTodo(props.index)}
        >
          X
        </button>

        <button
          className="up-button"
          onClick={() => props.moveTodoUp(props.index)}
        >
          ↑
        </button>
        <button
          className="down-button"
          onClick={() => props.moveTodoDown(props.index)}
        >
          ↓
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

// Inside of the curly braces are JavaScript variables, rather than HTML
// The curly braces are used to embed JavaScript expressions into the HTML
// The argument that gets passed to the props parameter is an object
// all properties that we pass to our component are combined into a single item, so we can access them using dot notation
// Javascript objects are similar to python dictionaries, to access the value of a key in a dictionary, we use dot notation
