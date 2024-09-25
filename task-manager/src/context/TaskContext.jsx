/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getTasks, addTask, deleteTask, toggleTaskCompletion } from "../api/mockApi";

export const TaskContext = createContext()

export const TaskProvider = ({ children, user }) => {
    const [tasks, setTasks] = useState(getTasks(user.email))


    const addTaskToUser = (title, description) => {
        const newTask = { id: Date.now(), title, description, completed: false }
        const res = addTask(user.email, newTask)
        if (res.success) {
            setTasks([...tasks, newTask])
        }
    }

    const deleteTaskFromUser = (taskId) => {
        const res = deleteTask(user.email, taskId);
        if (res.success) {
            setTasks(tasks.filter(task => task.id !== taskId));
        }
    };

    const toggleTaskCompletionForUser = (taskId) => {
        const res = toggleTaskCompletion(user.email, taskId);
        if (res.success) {
            setTasks(tasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            ));
        }
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                addTaskToUser,
                deleteTaskFromUser,
                toggleTaskCompletionForUser,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}
