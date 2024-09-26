'use client'

import { likeup } from '@/app/actions/todoActions'
import React, { useState } from 'react'
import { HiHeart } from 'react-icons/hi'



const Like = ({postId}:{postId : string}) => {
    const [liked, setLiked] = useState(false)

    async function handleLike(){
        await likeup(postId)
        setLiked(!liked)
    }    

  return (
    <div><HiHeart onClick={handleLike} style={{ 
        cursor: "pointer",
        color: liked ? 'red' : 'grey'
      }}/></div>
  )
}

export default Like