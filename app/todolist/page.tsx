import Todo from "@/components/Todo";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getData = async () => {

    const data = await prisma.todo.findMany({
      select: {
        id: true,
        title: true,
        description : true,
        like : true,
        // isCompleted: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return data;
  };

export default async function Todolist(){
    const data = await getData()
    console.log(data)
    return (
    <div className="flex flex-col justify-center items-center gap-2">
    {data.map((todo, key) => (
      <div key={key}>
        <Todo todo={todo} />
      </div>
    ))}
  </div>
  )
}