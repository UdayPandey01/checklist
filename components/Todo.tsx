import React from "react";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";
import Like from "./Like";



const Todo = ({ todo }) => {
  console.log(todo);
  return (
    <div className="flex flex-col justify-between items-center p-6 bg-white shadow-md rounded-lg mb-6 mt-14 max-w-md w-full">
      <div className="flex flex-col gap-3 items-start w-full">
        <h2 className="text-xl font-semibold text-gray-900">{todo.title}</h2>
        <p className="text-gray-700 text-base">{todo.description}</p>
      </div>
      <div className="flex flex-row gap-6 items-center mt-4 w-full justify-end">
        <DeleteTodo todo={todo} />
        <EditTodo todoId={todo.id} />
        <div>
          <Like postId={todo.id}/>
          {todo.like}
        </div>
      </div>
    </div>
  );
};

export default Todo;
