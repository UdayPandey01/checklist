"use client";

import { useEffect, useState } from "react";
import { editTodo, getTodo } from "../actions/todoActions";
import { useRouter, useSearchParams } from "next/navigation";
import { Todo } from "@prisma/client";

export default function EditScreen() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    if (id) {
      getTodo(id).then((todo) => setTodo(todo));
    }
  }, [id]);

  async function updateTodo() {
    if (todo) {
        await editTodo(todo);
        alert('Updated')
        router.push('/todolist')
    }
  }

  return (
    <div>
      {todo ? (
        <div>
          <form className='flex flex-col gap-6 max-w items-center' action={updateTodo}>
            <input
              className='bg-white p-2 rounded-xl h-9 text-black'
              value={todo.title ?? ""}
              onChange={(e) => {
                setTodo({ ...todo, title: e.target.value });
              }}
            />
            <textarea value={todo.description?? ''}
              className='flex bg-white p-2 rounded-xl justify-center text-black'
              onChange={(e)=>{
                setTodo({...todo, description : e.target.value})
              }}
            ></textarea>
            <button
              className="rounded-lg border p-1 bg-red-300 text-gray-700"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
