// src/data/useTodos.ts
import { useState, useEffect } from "react";
import { todo as initialTodos } from "./todolist";

export type Todo = {
  id: number;
  title: string;
  dateExpired: string;
  status: boolean;
  important: boolean;
};

// Đây là hook chính
export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("todoList");
    if (saved) {
      try {
        setTodos(JSON.parse(saved));
      } catch (e) {
        console.error("Parse error:", e);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  return [todos, setTodos] as const;
};