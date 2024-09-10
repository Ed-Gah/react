'use client'
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TodoV1 from "./TodoV1";

function TodoList() {
  const [todos, setTodos] = useState([]) as any;

  const addTodo = (todo: any) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId: any, newValue: any) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev: any) =>
      prev.map((item: any) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id: any) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id: any) => {
    let updatedTodos = todos.map((todo: any) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="w-[80%]">
      <h1 className=" text-gray-800 font-bold text-center text-2xl py-8">What do you have on your plate today?</h1>
      <TodoForm onSubmit={addTodo} />
      <div className=" pt-3"> 

      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      {/* <TodoV1 /> */}
      </div>
    </div>
  );
}

export default TodoList;
