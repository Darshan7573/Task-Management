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
        return { success: true, message: 'User already exists' }
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