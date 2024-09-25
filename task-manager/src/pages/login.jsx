import { useState } from "react"
import { useHistory } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleLogin = () => {

    }

    return (
        <div className="flex flex-col  justify-center items-center min-h-screen bg-transparent">
            <div className="border-2 border-black-700 flex flex-col justify-center items-center py-16 px-16 bg-gray-100">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <div>
                    <input type="email" placeholder="Enter Email" value={email} className="w-full px-7 py-3 mb-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} className="w-full px-7 py-3 mb-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin} className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                        Login
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Login