"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { createTodo } from "@/app/actions/todoActions";

const AddTodo = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await createTodo(formData);
    router.push('/todolist');
  };

  return (
    <form className="flex gap-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5">
        <input
          className="bg-white p-2 rounded-xl h-9 text-black"
          type="text"
          placeholder="Title"
          name="title"
          required
        />
        <textarea
          className="flex bg-white p-2 rounded-xl justify-center text-black"
          placeholder="Description"
          name="description"
          required
        ></textarea>
        <button
          type="submit"
          className="rounded-lg border p-1 bg-gray-950 text-white"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
