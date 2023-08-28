import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getTodos, postTodo, completeTodo, deleteTodo } from './my-api';


function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours}h ${minutes}m ${remainingSeconds}s`;
}


function Todos() {
    const queryClient = useQueryClient();

    // Fetch todos using useQuery
    const todosQuery = useQuery({ queryKey: ['todos'], queryFn: getTodos });

    // Mutation to add a new todo
    const mutation = useMutation({
        mutationFn: postTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

    // Mutation to mark a todo as completed
    const completeMutation = useMutation({
        mutationFn: completeTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

    // Mutation to delete a todo
    const deleteMutation = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Todo List</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const title = e.target.title.value;
                    if (title) {
                        mutation.mutate({ title });
                        e.target.title.value = '';
                    }
                }}
            >
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        placeholder="Add a new task"
                        required
                    />
                    <button className="btn btn-primary" type="submit">
                        Add
                    </button>
                </div>
            </form>
            {/* Table to display todos */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Created Time</th>
                        <th>Time Spent</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todosQuery.data?.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{new Date(todo.createdTime).toLocaleString()}</td>
                            {/* Display time spent in hours, minutes, and seconds */}
                            <td>{formatTime(todo.timeSpent)}</td>
                            <td>
                                {/* Display buttons based on completion status */}
                                {!todo.completed ? (
                                    <>
                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={() => {
                                                completeMutation.mutate(todo.id);
                                            }}
                                        >
                                            Complete
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm ml-2"
                                            onClick={() => {
                                                deleteMutation.mutate(todo.id);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </>
                                ) : (
                                    <span className="text-success">Completed</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
export default Todos;