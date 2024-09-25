import { useState } from "react"
import { registerUser } from "../api/mockApi.js"
import { useNavigate } from "react-router-dom"

const SignUp = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const handleRegister = () => {
        if (!email || !password || !confirmPassword) {
            alert('Please fill in all fileds')
            return
        }

        if (password !== confirmPassword) {
            alert('Password do not match')
            return
        }

        const res = registerUser({ email, password })
        if (res.success) {
            alert(res.message)
            navigate('/login')
        } else {
            alert(res.message)
        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <div className="border-2 border-gray-300 flex flex-col justify-center items-center py-8 px-10 bg-white">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    className="w-full px-7 py-3 mb-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    className="w-full px-7 py-3 mb-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    className="w-full px-7 py-3 mb-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                    onClick={handleRegister}
                    className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                    Register
                </button>
            </div>
        </div>
    )
}

export default SignUp