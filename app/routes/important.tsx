import ImportantPage from "../components/ImportantPage";
import { useOutletContext } from "react-router-dom";

type Context = {
  todos: any[];
  setTodos: any;
  searchText: string;
};

export function meta() {
  return [{ title: "Important Plans" }];
}

export default function Important() {
  const { todos,setTodos, searchText } = useOutletContext<Context>();

  return <ImportantPage searchText={searchText} todos={todos} setTodos={setTodos}/>;
}