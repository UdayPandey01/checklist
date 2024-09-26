"use client"

import React from "react";
import { DropDown } from "./DropDown";
import { useRouter } from "next/navigation";



const Navbar = () => {
  const router = useRouter()
  function handleHome(){
    router.push('/')
  }
  return (
    <div className="navbar justify-around bg-slate-300">
      <a onClick={handleHome} className="btn btn-ghost text-xl">TODO</a>
      <DropDown/>
    </div>
  );
};

export default Navbar;
