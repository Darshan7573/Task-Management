/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getTasks, addTask, deleteTask, toggleTaskCompletion } from "../api/mockApi";

export const TaskContext = createContext()

export const TaskProvider = ({ children, user }) => {
    const [userEmail, setUserEmail] = useState(null)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const storedEmail = localStorage.getItem('user');
        if (storedEmail) {
            const users = JSON.parse(storedEmail);
            if (users && users.email) { // Check if users and users.email are not null
                setUserEmail(users.email.trim());
            } else {
                console.warn('User email not found in local storage.');
            }
        }
    }, [])

    useEffect(() => {
        const fetchTasks = async () => {
            const fetchedTasks = await getTasks(user.email)
            setTasks(fetchedTasks || [])
        }
        fetchTasks()
    }, [user.email])

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
