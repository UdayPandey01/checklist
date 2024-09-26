import AddTodo from "@/components/AddTodo";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-2xl mb-5 text-slate-800">Todo</span>
      <div>
        <AddTodo />
      </div>
    </div>
  );
}
