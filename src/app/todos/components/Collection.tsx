"use client"
import AddIcon from "@/app/components/AddIcon";
import TodoIcon from "./TodoIcon";
import TodoItem from "./TodoItem";
import React, { useState,  useEffect } from "react";
import Modal from "./Modal/Modal";
import { getTodos } from "@/server-functions/getTodos";


export default function Collection() {
  const [isShowModal, setIsShowModal] =  useState(false);
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<Array<{task: string, id: number}>>([]);
  // useEffect(() => {
  // async  function IgetTodos() {
  // const todos = await getTodos()
  //  setTodos(todos);
  //   }
  //  IgetTodos()
  // })

  function handleNewTask(e: any) {
    setTask(e.target.value);
  }
  function handleAddTodo() {
      setIsShowModal(!isShowModal);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // const res = await fetch('http://localhost:3000/api/todos', {
    //   method: 'POST',

    // })
    // console.log(res.json());
    setTodos([...todos, { task , id: Math.random() * 10}])
    setIsShowModal(false)
    }

    function handleDeleteTodo(id: number) {
      setTodos(
        todos.filter(todo => todo.id !== id)
      )

    }

  return (
 
    <div className="w-6/12 h-auto bg-gray-700/50 text-white font-mono rounded-lg my-4">
      <div className="w-full h-15 pb-5 pt-4 ps-7 bg-gray-700 text-bold    text-2xl flex gap-2 rounded-lg  justify-between">
        <div className="flex gap-2">
        <TodoIcon/>
        <span className="">
         Collection
      </span>
        </div>
        <div onClick={handleAddTodo} className="me-3">
          <AddIcon/>
        </div>

      </div>
      <div className=" p-3 text-center">
        {!todos.length && <div>No todos</div>}
      {todos.map(todo => <TodoItem key={todo.id} handleDelete = {handleDeleteTodo} task={todo} />)}
      </div>
      {isShowModal && <Modal handleTodo={handleAddTodo}>
        <div className="text-black">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="add-todo" className="text-white block mb-3 text-center">Add new Task</label>
            <input type="text"  className="w-full" onChange={handleNewTask} name={'add-todo'}/>
          </form>
        </div>
        </Modal>}
    </div>
  )
}