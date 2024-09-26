'use server'

import { prisma } from "@/utils/prisma"
import { Todo } from "@prisma/client"
import { revalidatePath } from "next/cache"

export async function createTodo(formData : FormData){
    try {
        const title = formData.get('title') as string
        const description = formData.get('description') as string

        await prisma.todo.create({
            data : {
                title: title,
                description : description
            }
        })

        revalidatePath('/')
    } catch (error) {
        console.log(error)
    }
}

export async function deleteTodo(formData : FormData){
    const postId = formData.get('postId') as string
    try{
        await prisma.todo.delete({
            where :{
                id : postId
            }
        })
        revalidatePath('/')
    }catch(e){
        console.log(e)
    }
}

export async function editTodo(todo : Todo){
    await prisma.todo.update({
        where : {
            id : todo.id
        },
        data :{
            title : todo.title,
            description : todo.description
        }

    })
    revalidatePath('/')
}

export async function getTodo(postId : string){
    const todo = await prisma.todo.findUnique({
        where: { 
            id: postId
        },
    });
    return todo
}

export async function sortTodo(orderBy : string){
    const todos = await prisma.todo.findMany({
        select :{
            id : true,
            title : true,
            description : true,
            createdAt : true
        },
        orderBy :{
            [orderBy] : orderBy === "createdAt" ? "desc" : "asc"
        }
    })
    return todos
}

export async function likeup(postId : string){
    const todo = await prisma.todo.findFirst({
        where :{
            id : postId
        },
        select :{
            like : true
        }
    })
    if(todo){
        await prisma.todo.update({
            where :{
                id : postId
            },
            data : {
                like : todo.like + 1 
            }
        })
    }
    revalidatePath('/todolist')
}
