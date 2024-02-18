import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet a friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build a really cool todo app",
      isCompleted: false,
    },
  ]);

  // above is a state declaration, the first element is the state variable, the second is the function that updates the state variable
  // useState is a hook that allows us to add state to our functional components
  // useState takes in one argument, the initial state of the variable
  // the function that updates the state variable is called a setter function
  // the setter function is used to update the state variable

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // function to move a todo up in the list
  const moveTodoUp = (index) => {
    if (index === 0) return; // can't move the first todo up
    const newTodos = [...todos];
    const temp = newTodos[index];
    newTodos[index] = newTodos[index - 1];
    newTodos[index - 1] = temp;
    setTodos(newTodos);
  };

  // function to move a todo down in the list
  const moveTodoDown = (index) => {
    if (index === todos.length - 1) return; // can't move the last todo down
    const newTodos = [...todos];
    const temp = newTodos[index];
    newTodos[index] = newTodos[index + 1];
    newTodos[index + 1] = temp;
    setTodos(newTodos);
  };

  // the above function is a callback function that takes in a text argument
  // the function creates a new array that contains all the elements of the todos array and the text argument
  // the new array is then passed to the setTodos function, which updates the state variable and the application re-renders

  return (
    <div className="app">
      <h1 className="todo-list">My todo list</h1>
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          key={todo.id} // unique key for each todo
          index={index}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          moveTodoUp={moveTodoUp}
          moveTodoDown={moveTodoDown}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;

// react tracks the web page by indexing each piece of html with a key
// props are read only when they are passed into functions, and are objects that contain all the properties that are passed to a component
