import { useState } from "react";
import { registerUser } from "../api/mockApi";
import { useNavigate } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = () => {
        if (!email || !password || !confirmPassword) {
            toast.error("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        const res = registerUser({ email, password });
        if (res.success) {
            toast.success('Account Created Successfully, Please Login')
            navigate("/login");
        } else {
            toast.error(res.message);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <div className="flex flex-row justify-center items-center gap-2 mb-2">
                    <FaTasks className="text-green-300 text-2xl" />
                    <h1 className="font-bold text-2xl">Task Management</h1>
                </div>
                <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Create Account</h2>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    className="w-full px-5 py-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    className="w-full px-5 py-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    className="w-full px-5 py-3 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button
                    onClick={handleRegister}
                    className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
                >
                    Register
                </button>
            </div>
            <button onClick={() => navigate('/')} className="absolute top-4 py-3 left-4 bg-green-300 px-4 rounded-md hover:bg-green-500 text-black font-bold">
                Home
            </button>
        </div>
    );
};

export default SignUp;
