import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskDashboardPage = () => {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const { tasks, addTaskToUser, deleteTaskFromUser, toggleTaskCompletionForUser } = useContext(TaskContext)

    const handleAddTask = () => {
        if (!title || !description) {
            alert('Please provide all the details')
            return
        }

        addTaskToUser(title, description)
        setTitle('')
        setDescription('')
    }

    return (
        <div className="flex flex-col  justify-center items-center min-h-screen bg-gray-100">
            <div className="border-2 border-black-700 flex flex-col justify-center items-center py-16 px-16 bg-gray-100">
                <h2 className="text-2xl  w-full font-bold mb-4">Task Dashboard</h2>
                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    className="w-full px-7 py-3 mb-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Task Description"
                    value={description}
                    className="w-full px-7 py-3 mb-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button onClick={handleAddTask} className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Add Task
                </button>

                <ul className="w-full mt-6">
                    {tasks.map(task => (
                        <li key={task.id} className={`flex justify-between items-center p-4 bg-white rounded shadow mb-4 ${task.completed ? 'opacity-50' : ''}`}>
                            <div>
                                <h3 className={`text-xl font-bold ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
                                <p className={task.completed ? 'line-through' : ''}>{task.description}</p>
                            </div>

                            <div className="flex items-center space-x-4">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTaskCompletionForUser(task.id)} // Toggle completion using context
                                    className="cursor-pointer"
                                />
                                <button
                                    onClick={() => deleteTaskFromUser(task.id)} // Delete task using context
                                    className="text-red-600 hover:text-red-800"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default TaskDashboardPage