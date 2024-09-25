import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskDashboardPage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { tasks, addTaskToUser, deleteTaskFromUser, toggleTaskCompletionForUser } = useContext(TaskContext);

    const handleAddTask = () => {
        if (!title || !description) {
            alert("Please provide all the details");
            return;
        }

        addTaskToUser(title, description);
        setTitle("");
        setDescription("");
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-4">
            <div className="border-2 border-gray-300 shadow-lg rounded-lg flex flex-col justify-center items-center p-10 bg-white w-full max-w-lg">
                <h2 className="text-3xl font-extrabold text-indigo-600 mb-6">Task Dashboard</h2>

                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    className="w-full px-5 py-3 mb-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Task Description"
                    value={description}
                    className="w-full px-5 py-3 mb-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button
                    onClick={handleAddTask}
                    className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
                >
                    Add Task
                </button>

                <ul className="w-full mt-6 space-y-4">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className={`flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-lg transition-transform transform ${task.completed ? "opacity-50" : "hover:scale-105"
                                }`}
                        >
                            <div>
                                <h3
                                    className={`text-xl font-semibold ${task.completed ? "line-through text-gray-500" : "text-gray-900"
                                        }`}
                                >
                                    {task.title}
                                </h3>
                                <p className={task.completed ? "line-through text-gray-400" : "text-gray-700"}>{task.description}</p>
                            </div>

                            <div className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTaskCompletionForUser(task.id)}
                                    className="cursor-pointer h-5 w-5 text-indigo-600 focus:ring-indigo-500 rounded"
                                />
                                <button
                                    onClick={() => deleteTaskFromUser(task.id)}
                                    className="text-red-600 hover:text-red-800 transition-colors"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskDashboardPage;
