import TodoList from "@/components/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-screen bg-stone-50 flex max-w-screen-xl justify-center">
     <TodoList />
    </div>
  );
}
