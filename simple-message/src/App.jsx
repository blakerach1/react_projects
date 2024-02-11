import React from "react";

function App() {
  const [message, setMessage] = React.useState("JavaScript is so cool.");

  function handleClick() {
    setMessage("I love React");
  }

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update the message!</button>
    </div>
  );
}

export default App;

// Notes
// react can only return one single html element, which is why the above is wrapped in a div
// you can instead handle this using <></> - fragment, empty html element tags
// setMessage is a function that updates the state of the message variable, it triggers re-rendering of the component
// onClick is a prop that takes a function, which is called when the button is clicked
// the function handleClick is defined in the component, and updates the state of the message variable
// onClick is a React event listener, it listens for the click event on the button
