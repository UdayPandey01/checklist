import { getData } from "@/app/todolist/page";
import React from "react";

export const DropDown = () => {
  function handler(sort){
    getData(sort)
  }
  
  return (
    <details className="dropdown">
      <summary className="btn m-1">Short</summary>
      <ul className="menu dropdown-content bg-white rounded-box z-[1] w-52 p-2 shadow text-black">
        <li>
          <a onClick={()=>handler('createdAt')}>Time</a>
        </li>
        <li>
          <a onClick={()=>handler('title')}>Name</a>
        </li>
      </ul>
    </details>
  );
};
