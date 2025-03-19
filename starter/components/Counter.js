"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  console.log(users);
  return (
    <div>
      <button onClick={() => setCount((cur) => cur + 1)}>Add</button>
      <button onClick={() => setCount((cur) => cur - 1)}>Minus</button>
      <div>Count : {count}</div>
    </div>
  );
}
