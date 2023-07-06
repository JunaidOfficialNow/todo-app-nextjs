'use client'

import { useState } from "react";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";

export default function TodoItem({task, handleDelete}: {task: {task: string, id: number}, handleDelete: (id: number)=> void}) {
  const [todo, setTodo] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

 function handleChecked() {
  setIsCompleted(!isCompleted);
 }

  return <div className="transition w-full delay-100 mt-1 min-h-9  text-start px-5 py-4  font-mono flex justify-between">
    <div className="flex gap-3">
      <input type="checkbox" className="bg-transparent" checked={isCompleted} onChange={handleChecked}/>
    <div className={ `${isCompleted ? 'line-through': ''}`}>{task.task}</div>
    </div>

    
    <div className="flex justify-betweeen gap-7 ">
      <div onClick={() => {handleDelete(task.id)}}>
      <DeleteIcon/>
      </div>

    {/* <EditIcon/> */}
    </div>
  </div>
}