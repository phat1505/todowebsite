import { useState, useEffect } from "react";

type Todo = {
    id: number;
    title: string;
    dateExpired: string;
    status: boolean;
    important: boolean;
};
type AddtodoProps = {
    onAdd: (todo: { title: string; dateExpired: string; status: boolean, important: boolean }) => void;
    initialData?: { title: string; dateExpired: string; status: boolean; important: boolean };
    editingTodo?: Todo | null
    onSave?: (todo: Todo) => void
    onClose?: () => void

};
export default function AddTodo({ onAdd, editingTodo, onSave, onClose }: AddtodoProps) {
    const [title, setTitle] = useState("");
    const [dateExpired, setDateExpired] = useState("");
    const [status, setStatus] = useState(false);
    const [important, setImportant] = useState(false);
    useEffect(() => {
        if (editingTodo) {
            setTitle(editingTodo.title);
            setDateExpired(editingTodo.dateExpired);
            setStatus(editingTodo.status);
            setImportant(editingTodo.important);
        }
    }, [editingTodo]);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !dateExpired) return;
        if (editingTodo && onSave) {
            onSave({
                id: editingTodo.id,
                title,
                dateExpired,
                status,
                important,
            });
        } else {
            onAdd({ title, dateExpired, status, important });
        }
        setTitle("");
        setDateExpired("");
        setStatus(false);
        setImportant(false);
    };
    return (
        <form onSubmit={handleSubmit} className="text-black flex flex-col gap-4"  >
            <input type="text"
                placeholder="Title's Todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input type="date"
                placeholder="Date Expired"
                value={dateExpired}
                onChange={(e) => setDateExpired(e.target.value)}
            />
            <label >
                <input type="checkbox"
                    checked={status}
                    onChange={(e) => setStatus(e.target.checked)}
                    className="mr-2"
                />
                Hoàn thành
            </label>
            <label>
                <input type="checkbox"
                    checked={important}
                    onChange={(e) => setImportant(e.target.checked)}
                    className="mr-2"
                />
                Important
            </label>
            <div className="flex gap-3 mt-3">
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    {editingTodo ? "Save" : "Add Todo"}
                </button>


                {onClose && (
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                    >
                        Đóng
                    </button>
                )}
            </div>
        </form>
    );
}