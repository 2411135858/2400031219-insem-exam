import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Handlers
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">React Counter</h1>

      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <p className="text-4xl font-semibold mb-6 text-blue-600">{count}</p>

        <div className="flex space-x-4">
          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition"
          >
            Decrement
          </button>

          <button
            onClick={reset}
            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded-lg transition"
          >
            Reset
          </button>

          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
