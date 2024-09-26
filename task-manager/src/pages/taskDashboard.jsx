import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const TaskDashboardPage = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { tasks, addTaskToUser, deleteTaskFromUser, toggleTaskCompletionForUser } = useContext(TaskContext);

    const handleAddTask = () => {
        if (!title || !description) {
            toast.error("Please provide all the details");
            return;
        }

        addTaskToUser(title, description);
        setTitle("");
        setDescription("");
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem('user')
        if (storedEmail) {
            const users = JSON.parse(storedEmail)
            const email = users.email.trim()
            const username = email.split('@')[0]
            setEmail(username)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('user')
        toast.success('Logged Out Successfully')
        navigate('/')
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-4">
            <div className="border-2 border-gray-300 shadow-lg rounded-lg flex flex-col justify-center items-center p-6 md:p-10 bg-white w-full max-w-lg">
                <p className="font-bold mb-5">Welcome, {email}</p>
                <h2 className=" text-2xl md:text-3xl font-extrabold text-indigo-600 mb-6">Task Dashboard</h2>

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
                <p>{!tasks || tasks.length === 0 ? <p className="mt-4 font-semibold text-gray-700">Add the task to appear here</p> : ""}</p>
                <ul className="w-full mt-6 space-y-4">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className={`flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-lg transition-transform transform ${task.completed ? "opacity-50" : "hover:scale-105"
                                }`}
                        >
                            <div>
                                <h3
                                    className={`text-xl font-bold ${task.completed ? "line-through text-red-500" : "text-gray-900"
                                        }`}
                                >
                                    {task.title}
                                </h3>
                                <p className={task.completed ? "line-through text-red-700" : "text-gray-700"}>{task.description}</p>
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
            <button onClick={() => navigate(-1)} className="absolute top-4 left-4 bg-green-300 text-white px-4 py-2 rounded-md hover:bg-green-500 transition duration-300">
                Go Back
            </button>
            <button onClick={() => handleLogout()} className="absolute top-4 right-4 bg-red-400 text-black px-4 py-2 rounded-md hover:bg-red-500 transition duration-300">
                Logout
            </button>
        </div >
    );
};

export default TaskDashboardPage;
