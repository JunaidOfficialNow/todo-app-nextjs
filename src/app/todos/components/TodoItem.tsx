'use client'

import { useState } from "react";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";

export default function TodoItem() {
  const [todo, setTodo] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

 function handleChecked() {
  setIsCompleted(!isCompleted);
 }

  return <div className="transition w-full delay-100 mt-1 min-h-9  text-start px-5 py-4  font-mono flex justify-between">
    <div className="flex gap-3">
      <input type="checkbox" className="bg-transparent" checked={isCompleted} onChange={handleChecked}/>
    <div className={ `${isCompleted ? 'line-through': ''}`}>Todos</div>
    </div>

    
    <div className="flex justify-betweeen gap-7 "><DeleteIcon/><EditIcon/></div>
  </div>
}