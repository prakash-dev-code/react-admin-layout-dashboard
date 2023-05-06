import React, { useState } from "react";

const User = () => {
  const [count, setCount] = useState("Nothing");
  
  const toggle = () =>{
    setCount("you clicked button")
  }

  return (
    <div>
       <p>You clicked {count} here</p>
      <button onClick={toggle}>
        Click me
      </button>
    </div>

  );
};

export default User;
