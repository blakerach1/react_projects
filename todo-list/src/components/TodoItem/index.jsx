import "./style.css";

function TodoItem(props) {
  return (
    <div className={`todo ${props.todo.isCompleted ? "complete" : ""}`}>
      {props.todo.text}
      <div>
        <button onClick={() => props.completeTodo(props.index)}>
          Complete
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
