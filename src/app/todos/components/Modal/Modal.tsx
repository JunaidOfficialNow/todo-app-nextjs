import React from "react";
import CloseIcon from "../CloseIcon";

export default function Modal({ children, handleTodo }: {children: React.ReactNode, handleTodo: () => void}) {


  return (
    <div className="w-screen h-screen bg-black/50 z-20 fixed top-0 left-0 flex justify-center items-center">
      <div  className="min-h-[30%] min-w-[30%] bg-gray-700 opacity-95 border border-white p-3 flex flex-col ">
        <div onClick={handleTodo}>
        <CloseIcon/>
        </div>
        <div className="flex justify-center items-center flex-grow bg-black opacity-75">
        {children}
        </div>

      </div>
  

    </div>
  )
}