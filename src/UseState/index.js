import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  console.log("UseState has rendered");

  const click = () => {
    //fetch this api
    //then do something with the response
    //then set the count to increase by 1
    setCount(count + 1);
  };

  return (
    <div>
      {/* <button onClick={()=> setCount(count +1)}>count: {count}</button> */}
      <button onClick={click}>count: {count}</button>
      <button onClick={() => setCount(0)}>Make count 0</button>
      <button onClick={() => setCount(5)}>Make count 5</button>
    </div>
  );
};

export default UseState;
