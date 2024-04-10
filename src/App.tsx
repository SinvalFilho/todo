import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      const newTodo: Todo = {
        id: todos.length + 1,
        text: inputText.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText("");
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <div className="h-screen bg-fuchsia-800 ">
        <div>
          <h1 className="text-purple-50 flex justify-center text-2xl">
            Todo List
          </h1>
          <div className="flex justify-center mt-4">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Add new todo"
              className="border-2 border-gray-400 mr-2 px-2 py-1 rounded"
            />
            <button
              onClick={handleAddTodo}
              className="bg-purple-600 text-white px-4 py-1 rounded"
            >
              Add
            </button>
          </div>
          <ul className=" mt-4 flex-col justify-center bg-purple-600 shadow-black shadow-2xl">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="text-white text-2xl flex justify-center gap-0.5"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  className="mr-2"
                />
                <span
                  className="te"
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
