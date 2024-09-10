import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiEditCircleFill } from "react-icons/ri";
import { IoCloseCircle } from "react-icons/io5";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }: any) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value: any) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo: any, index: any) => (
    <div
      className={
        todo.isComplete
          ? "flex justify-between items-center mx-auto my-1 bg-gray-100 text-gray-50 rounded-md p-4 w-full opacity-40"
          : "flex justify-between items-center mx-auto my-1 bg-gray-100 text-gray-700 rounded-md px-4 py-2 w-full"
      }
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)} className="">
        {todo.text}
      </div>
      <div className=" flex items-center text-xl gap-2 text-gray-700">
        <IoCloseCircle onClick={() => removeTodo(todo.id)} />
        <RiEditCircleFill onClick={() => setEdit({ id: todo.id, value: todo.text })} />
      </div>
    </div>
  ));
};

export default Todo;
