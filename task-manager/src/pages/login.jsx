import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/mockApi";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!email || !password) {
            alert("Please fill in both email and password");
            return;
        }

        const res = loginUser(email, password);
        if (res.success) {
            localStorage.setItem("user", JSON.stringify(res.user));
            navigate("/tasks");
        } else {
            alert(res.message);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-indigo-50 to-blue-100">
            <div className="w-full max-w-md p-10 bg-white border border-gray-200 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-indigo-600 text-center mb-8">Login</h2>

                <div className="space-y-6">
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        className="w-full px-5 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        className="w-full px-5 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        onClick={handleLogin}
                        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
