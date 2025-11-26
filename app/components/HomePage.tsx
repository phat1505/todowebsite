import { Link } from "react-router";
import TodoList from "./TodoList";
import { useState } from "react";
import AddTodo from "./AddTodo";
import type { Todo } from "../data/type";
type HomePageProps = {
    searchText: string;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};


export default function HomePage({ searchText, todos, setTodos }: HomePageProps) {

    const [isOpen, setIsOpen] = useState(false);
    const handleAddTodo = (newtodo: {
        title: string;
        dateExpired: string;
        status: boolean;
        important: boolean
    }) => {
        setTodos(prev => {
            const newId = prev.length > 0
                ? Math.max(...prev.map(t => t.id)) + 1
                : 1;
            return [...prev, { ...newtodo, id: newId }];
        });
        setIsOpen(false);
    };
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
            <div className="md:w-5/6 items-start py-2 ">
                <div className="flex justify-between">
                    <div className="flex justify-center">
                        <img src="/images/sun.png" className="h-7 w-7 mx-1" />
                        <h1 className="md:text-2xl text-xl">My Plans Today</h1>
                    </div>
                    <div className="flex justify-between md:text-xl text-lg bg-green-300 rounded-3xl items-center hover:bg-green-700 p-2">
                        <Link to="#">
                            <img src="/images/add.png" alt="Add Plan Icon" className="md:w-6 md:h-6 w-4 h-4" />
                        </Link>

                        <button onClick={() => setIsOpen(true)}
                            >Add Plan</button>
                    </div>
                </div>
                {isOpen && (
                    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
                        <div className="bg-white p-5 rounded-xl shadow-xl ">
                            <AddTodo onAdd={handleAddTodo} 
                            onClose={() => setIsOpen(false)} />
                                    
                        </div>
                    </div>
                )}
                <div className="mt-4 border border-white rounded-xl">
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
                    <TodoList todos={todos} searchText={searchText}  onDelete={handleDelete} onEdit={handleEdit}/>
                </div>
            </div>
        </div>
    );
}