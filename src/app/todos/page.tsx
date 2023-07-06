import Collection from "./components/Collection";

export default function Todos() {
  
  return <div className="flex flex-col items-center h-[80%] mt-24">
    <div className="animate-todo-head py-4 font-mono text-3xl mt-10 text-center text-white w-1/3">Todos</div>
    <div className="w-full flex flex-col items-center min-h-2/3 mt-5 animate-slide-in" >


      <Collection />

    </div>
  </div>
}