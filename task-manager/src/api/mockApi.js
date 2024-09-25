const users = []

export const registerUser = (userData) => {
    users.push(userData)
    return { success: true, message: 'User registered successfully' }
}

export const loginUser = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password)
    if (!user) return { success: true, user }
    return { success: false, message: 'Invalid Credentials' }
}