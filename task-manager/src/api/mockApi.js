const getUserFromStorage = () => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    return users
}

const saveUsersToStorage = (users) => {
    localStorage.setItem('users', JSON.stringify(users))
}

export const registerUser = (userData) => {

    const users = getUserFromStorage()

    const userExists = users.find(user => user.email === userData.email)
    if (userExists) {
        return { success: false, message: 'User already exists' }
    }
    users.push({ ...userData, tasks: [] })
    saveUsersToStorage(users)
    return { success: true, message: 'User registered successfully' }
}

export const loginUser = (email, password) => {

    const users = getUserFromStorage()

    const user = users.find(user => user.email === email && user.password === password)
    if (user) return { success: true, user }
    return { success: false, message: 'Invalid Credentials' }
}

export const getTasks = (email) => {
    const users = getUserFromStorage()

    const user = users.find(user => user.email === email)
    return user ? user.tasks : []
}

export const addTask = (email, task) => {
    const users = getUserFromStorage()

    const user = users.find(user => user.email === email)
    if (user) {
        user.tasks = [...user.tasks, task]
        saveUsersToStorage(users)
        return { success: true, task }
    }
    return { success: false }
}

export const deleteTask = (email, taskId) => {
    const users = getUserFromStorage()

    const user = users.find(user => user.email === email)
    if (user) {
        user.tasks = user.tasks.filter(task => task.id !== taskId)
        saveUsersToStorage(users)
        return { success: true }
    }
    return { success: false }
}

export const toggleTaskCompletion = (email, taskId) => {
    const users = getUserFromStorage()

    const user = users.find(user => user.email === email);
    if (user) {
        user.tasks = user.tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        saveUsersToStorage(users);
        return { success: true };
    }

    return { success: false };
};
