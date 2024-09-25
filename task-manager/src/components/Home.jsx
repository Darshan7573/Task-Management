import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex flex-col justify-center items-center bg-white shadow-xl rounded-xl p-12 space-y-8 max-w-lg">
                <h1 className="text-4xl font-bold text-gray-900">Task Management</h1>
                <p className="text-gray-600 text-center text-lg">
                    Welcome! Please login or register to start managing your tasks efficiently.
                </p>
                <div className="space-y-4 w-full">
                    <button
                        onClick={() => navigate("/login")}
                        className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => navigate("/register")}
                        className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
