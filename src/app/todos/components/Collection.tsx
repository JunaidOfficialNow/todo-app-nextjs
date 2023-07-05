import TodoIcon from "./TodoIcon";
import TodoItem from "./TodoItem";

export default function Collection() {
  return (
    <div className="w-6/12 h-auto bg-gray-700/50 text-white font-mono rounded-lg my-4">
      <div className="w-full h-15 pb-5 pt-4 ps-7 bg-gray-700 text-bold    text-2xl flex gap-2 rounded-lg">
        <TodoIcon/>
        <span className="">
         Collection
      </span>
      </div>
      <div className=" p-3 text-center">
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </div>

    </div>
  )
}