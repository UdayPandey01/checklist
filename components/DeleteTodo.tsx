'use client'

import { deleteTodo } from '@/app/actions/todoActions'
import React from 'react'

const DeleteTodo = ({todo}) => {
  return (
    <div>
        <form action={async(FormData) => await deleteTodo(FormData)}>
        <input type="hidden" name='postId' value = {todo.id} />
        <button className='rounded-lg border p-1 bg-gray-950 text-white' type='submit'>Delete</button>
    </form>
    </div>
  )
}

export default DeleteTodo