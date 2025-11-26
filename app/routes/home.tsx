import HomePage from "../components/HomePage";
import { useOutletContext } from "react-router-dom";

type Context = {
  todos: any[];
  setTodos: any;
  searchText: string;
};

export function meta() {
  return [{ title: "Your Plans" }];
          
}

export default function Home() {
  const { todos, setTodos, searchText } = useOutletContext<Context>();

  return <HomePage searchText={searchText} todos={todos} setTodos={setTodos} />;
};