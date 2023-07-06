'use server'
import { todoRepository } from "@/app/repository/inMemory/todoRepository";

export async function getTodos(): Promise<Array<{task: string, id: number}>> {
  'use server'
  return await todoRepository.getTodos();
}
