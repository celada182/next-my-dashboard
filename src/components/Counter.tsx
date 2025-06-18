'use client'
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-300 transition-all w-[100px] mr-2"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
        <button
          className="flex items-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-300 transition-all w-[100px] mr-2"
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>
      </div>
    </div>
  );
};
