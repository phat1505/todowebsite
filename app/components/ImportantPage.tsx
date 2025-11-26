import { Link } from "react-router";
import ImportantList from "./ImportantList";
import type { Todo } from "../data/type";
type ImportantProps = {
    searchText: string;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
export default function ImportantPage({ searchText, todos, setTodos }: ImportantProps) {
    const handleDelete = (id: number) => {
        setTodos(prev => prev.filter(t => t.id !== id));
    };

    const handleEdit = (updatedTodo: Todo) => {
        setTodos(prev => prev.map(t => t.id === updatedTodo.id ? updatedTodo : t));
    };
    return (
        <div className="md:h-[1090px] h-[580px] md:flex md:justify-between">
            <div className="md:w-1/6 md:text-4xl md:h-full bg-slate-800 w-full text-lg ">
                <ul className="md:mt-20 flex justify-center gap-10 md:block">
                    <li className=" hover:bg-slate-950 px-3 md:mb-5 h-12 flex items-center">
                        <Link to="/">To Do List </Link>
                    </li>
                    <li className="hover:bg-slate-950 px-3 h-12 flex items-center">
                        <Link to="/important">Important</Link>
                    </li>
                </ul>
            </div>
            <div className="md:w-5/6 items-start py-2">
                <div className="flex justify-start">
                    <img src="/images/sun.png" className="h-7 w-7 mx-1" />
                    <h1 className="text-xl md:text-2xl">My Important Plans</h1>
                </div>
                <div className="mt-7 border border-white rounded-xl">
                    <div className="grid grid-cols-4 text-center  p-2 border-b">
                        <h3 className="text-left">
                            Tác vụ
                        </h3>
                        <h3>
                            Ngày hết hạn
                        </h3>
                        <h3>
                            Trạng thái
                        </h3>
                    </div>
                    <ImportantList todos={todos} searchText={searchText} showImportantOnly={true} onDelete={handleDelete} onEdit={handleEdit} />
                </div>
            </div>
        </div>
    );
}