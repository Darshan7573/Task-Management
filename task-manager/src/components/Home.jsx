import { useNavigate } from "react-router-dom";
import { FaTasks } from "react-icons/fa";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-green-400 to-green-300">
            <div className="flex bg-white shadow-2xl rounded-3xl max-w-5xl md:w-[700px] h-[500px] md:h-[500px overflow-hidden">
                <div className="w-full flex flex-col justify-center items-center p-6 md:p-12 space-y-6 bg-gray-50">
                    <div className="flex items-center space-x-2">
                        <FaTasks className="w-10 h-10 text-green-500 mb-10 md:mb-16" />
                        <h1 className="text-4xl font-bold text-gray-800 mb-10 md:mb-16">Task Management</h1>
                    </div>
                    <p className="text-gray-600 text-center font-bold text-sm px-2 md:text-lg md:px-4">
                        Welcome! Please login or register to start managing your tasks efficiently.
                    </p>
                    <div className="flex flex-col justify-center items-center space-y-4 w-full mt-auto">
                        <button
                            onClick={() => navigate("/login")}
                            className="w-[300px] py-3 bg-blue-500 text-white rounded-lg  font-semibold hover:bg-blue-600 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => navigate("/register")}
                            className="w-[300px] py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
