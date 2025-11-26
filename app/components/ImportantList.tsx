import Card from "./Todocard"
type Todo = {
    id: number;
    title: string;
    dateExpired: string;
    status: boolean;
    important: boolean;
}
type ImportantProps = {
    todos: Todo[];
    searchText: string;
    showImportantOnly?: boolean;
    onDelete: (id: number) => void;
    onEdit: (todo: Todo) => void;
};

export default function ImportantList({ todos, searchText, showImportantOnly = false, onDelete, onEdit }: ImportantProps) {
    const text = searchText.toLowerCase();
    const filteredTodo = todos
        .filter(t => t.title.toLowerCase().includes(text))
        .filter(t => showImportantOnly ? t.important === true : true);

    return (
        <div>

            {filteredTodo.length > 0 ? (filteredTodo.map(t => (
                <Card
                    key={t.id}
                    todo={t}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))
            ) : (
                <p>Không tìm thấy kết quả...</p>
            )}
        </div>
    )
}