import React, { useState } from 'react';  // Import React and useState hook
import './App.css'; // Import the CSS file for styling

function Counter() {
  // Initialize the state variable 'count' with 0
  const [count, setCount] = useState(0);

  // Function to handle the button click and increment the count
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Display the current count */}
        <h1>Click Counts are {count}</h1>
        
        {/* Button that triggers handleClick when clicked */}
        <button onClick={handleClick}>Click me</button>
      </header>
    </div>
  );
}

export default Counter;  // Export the Counter component for use in other files
