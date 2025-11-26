import Card from "./Todocard"
type Todo ={
    id: number;
    title:string;
    dateExpired:string;
    status: boolean;
    important: boolean;
}

type TodoProps = {
    todos: Todo[];
    searchText: string;
    onDelete: (id:number) => void;
    onEdit: (todo: Todo) => void;
};
export default function TodoList({todos, searchText, onDelete, onEdit}: TodoProps) {
    const filteredTodo = todos.filter((todo) => 
    todo.title.toLowerCase().includes(searchText.toLowerCase())
);
    return (
        <div>

            {filteredTodo.length > 0 ?(filteredTodo.map(todo => (
                <Card
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))
        ): (
            <p className="p-2">Không tìm thấy kết quả...</p>
        )}
        </div>
    )
}