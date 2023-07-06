'use server'
import { todoRepository } from "@/app/repository/inMemory/todoRepository"

 
export default async function addTodo(data: FormData) {
  const task = data.get('task')?.valueOf()
  if (task && typeof task == 'string') {
    todoRepository.addTodo(task);
  } else {
    throw new Error('Invalid task');
  }

}