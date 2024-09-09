"use client";
import { useState } from "react";

const Client = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-5xl mb-8 font-bold">Client Page</h1>

      <div className="join join-vertical">
        <span className="countdown font-mono text-6xl mx-auto">
          <span style={{ "--value": `${count}` }}></span>
        </span>
        <div className="join">
          <button className="btn btn-primary mx-2" disabled={count === 0} onClick={() => setCount(count - 1)}>
            -
          </button>
          <button className="btn btn-primary mx-2" disabled={count === 0} onClick={() => setCount(0)}>
            0
          </button>
          <button className="btn btn-primary mx-2" disabled={count === 99} onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Client;
