import { useState } from "react";
import TodoInput from "../../components/todo-input";
import TodoItem from "../../components/todo-item";

interface Todo {
  id: string;
  content: string;
}

function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const content = formData.get("content") as string;

    if (!content) return;

    setTodos([
      {
        id: crypto.randomUUID(),
        content,
      },
      ...todos,
    ]);
    e.currentTarget.reset();
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="mx-auto flex size-full flex-col gap-10 p-6 md:w-[70vw]">
      <h2 className="text-2xl font-bold">TODO 2025</h2>
      <form onSubmit={handleSubmit}>
        <TodoInput />
      </form>
      {!todos.length && (
        <p className="text-center">
          Add your first todo in the input field above ✨
        </p>
      )}
      <div className="flex flex-1 flex-col gap-3 overflow-auto">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            content={todo.content}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
