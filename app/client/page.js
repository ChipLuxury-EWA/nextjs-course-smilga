"use client";
import { useState } from "react";

const Client = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-7xl mb-4 font-bold">{count}</h1>
      <button className="btn btn-primary" disabled={count === 99}  onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="btn btn-primary" disabled={count === 0} onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
};

export default Client;
