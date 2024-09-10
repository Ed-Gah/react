import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props: any) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null) as any;

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e:any) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='w-full'>
      {props.edit ? (
        <div className=' flex gap-4'>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className=' w-full text-sm py-1 px-4 text-gray-950 placeholder-gray-500 border rounded-md focus:outline-[0.1px] focus:outline-gray-400'
          />
          <button onClick={handleSubmit} className='py-3 px-2 cursor-pointer rounded-md bg-gray-700 text-white w-24 text-xs edit'>
            Update
          </button>
        </div>
      ) : (
        <div className=' flex gap-4'>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className=' w-full text-sm py-1 px-4 text-gray-950 placeholder-gray-500 border rounded-md focus:outline-[0.1px] focus:outline-gray-400'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className=' py-3 px-2 cursor-pointer rounded-md bg-gray-700 text-white w-24 text-xs'>
            Add todo
          </button>
        </div>
      )}
    </form>
  );
}

export default TodoForm;
