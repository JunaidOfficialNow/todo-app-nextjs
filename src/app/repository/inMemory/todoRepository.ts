import { todos } from "@/db/inMemory/todos"

export const todoRepository = {
  addTodo: (task:string) =>  {
    const id = Math.random() * 10
    todos.collection.push({ task, id })
  },
  getTodos: () => {
    return todos.collection;
  },
  deleteTodo(id: number) {
    const newTodos = todos.collection.filter((task) => task.id !== id);
    todos.collection = newTodos;
  },
  updateTodo: (id: number, newTask: string) => {
     const newTodos = todos.collection.map((task)  => {
      if (task.id == id) {
        task.task = newTask
      } 
      return task;
     })
     todos.collection = newTodos;
  }
}