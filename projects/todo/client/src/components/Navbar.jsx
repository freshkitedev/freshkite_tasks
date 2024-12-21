import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useAuth } from '../contexts/Authcontext'
import { useTheme } from '../contexts/Themecontext';

const Navbar = () => {
    const {user} = useAuth();
    const {darkMode, toggleTheme} = useTheme();
    return (
        <nav className='bg-blue-300 dark:bg-gray-800 shadow-md'>
            <div className="container mx-auto px-2 ">
                <div className="flex justify-between items-center h-16">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">Todo App</h1>
                    <div className="flex items-center space-x-4">
                        <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                            {darkMode ? <FaSun className='text-yellow-400' /> :
                                <FaMoon className='text-gray-500' />}
                        </button>
                        {user ? (
                            <button className="px-3 py-2 text-md font-medium text-white
                             bg-red-500 rounded-lg hover:bg-red-700">
                                Logout
                            </button>
                        ) : (
                            <>
                                <button className="px-3 py-2 text-md font-medium text-white
                             bg-blue-500 rounded-lg hover:bg-blue-700">
                                    Signup
                                </button>
                                <button className="px-3 py-2 text-md font-medium text-white
                             bg-green-500 rounded-lg hover:bg-green-700">
                                    Signin
                                </button>
                            </>
                        )
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar