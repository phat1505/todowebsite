import { useState } from "react";
import AddTodo from "./AddTodo";
type TodoCardProps = {
    todo: {
    id: number;
    title: string;
    dateExpired: string;
    status: boolean;
    important: boolean;
    }
    onDelete: (id: number) => void;
    onEdit: (todo: {
        id: number;
        title: string;
        dateExpired: string;
        status: boolean;
        important: boolean;
    }) => void;
};
export default function Card({ todo, onDelete, onEdit}: TodoCardProps) {
    const [isEditing, setIsEditing] = useState(false);
    return (
      <div className="grid grid-cols-4 text-center border-b border-white rounded-xl p-2">
            <h3 className="text-left">{todo.title}</h3>
            <p>{todo.dateExpired}</p>
            <span>{todo.status ? "Hoàn thành" : "Chưa xong"}</span>
            <div className="flex justify-center">
                <img
                    src="/images/pencil.png"
                    className="h-6 w-6 mx-2 cursor-pointer"
                    onClick={() => setIsEditing(true)}
                />
                <img
                    src="/images/delete.png"
                    className="h-6 w-6 cursor-pointer"
                    onClick={() => onDelete(todo.id)}
                />
            </div>

            {/* Form Edit */}
            {isEditing && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                    <div className="bg-white p-5 rounded-xl shadow-xl">
                        <AddTodo
                           editingTodo={todo}

                           onSave={(updatedTodo) => {
                            onEdit(updatedTodo);
                            setIsEditing(false);
                           }}

                           onAdd={() => {}}
                           onClose={() => setIsEditing(false)}
                           />
                    </div>
                </div>
            )}
        </div>
    );
}