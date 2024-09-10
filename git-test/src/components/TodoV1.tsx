import React, { useState } from "react";

const TodoV1 = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <form className=" flex gap-4">
        <input
          className="w-full text-sm py-1 px-4 text-gray-950 placeholder-gray-500 border rounded-md focus:outline-[0.1px] focus:outline-gray-400"
          type="text"
          placeholder="Add a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="py-3 px-2 cursor-pointer rounded-md bg-gray-700 text-white w-24 text-xs"
          onClick={() => console.log("The input value is", input)}
        >
          Add Todo
        </button>
      </form>
      {/* <p className=" text-gray-800 mt-3 text-lg">{input}</p> */}
    </>
  );
};

export default TodoV1;
