'use server'

import Link from 'next/link'
import React from 'react'

const EditTodo = ({todoId}:{todoId : string}) => {
  return (
    <Link className='rounded-lg border p-1 bg-gray-950 text-white'  href={`/edit?id=${todoId}`}>Edit
      </Link>
  )
}

export default EditTodo