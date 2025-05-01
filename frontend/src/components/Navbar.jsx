import React from 'react'
import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { userStore } from '../stores/useUserStore';
import { cartStore } from '../stores/cartStore';


const Navbar = () => {
	const {user, logout} = userStore();
    const isAdmin = user? user.role === "admin": null;
	const {cart} = cartStore();
	// const user = true;
	// const isAdmin = true;
    return (
        <header className='fixed top-0 left-0 w-full bg-orange-200 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 '>
            <div className='container mx-auto py-3 px-4'>
                <div className='flex flex-wrap justify-between items-center'>
                    <Link to='/' className='text-4xl font-bold text-gray-700 items-center space-x-2 flex'>
                        I'm công
                    </Link>

                    <nav className='flex flex-wrap items-center gap-4 text-gray-700 '>
                        <Link className='font-bold' to={"/"}>Home</Link>
                        {user && (
                            <Link to={"/cart"} className='relative group'>
                                <ShoppingCart className='inline-block mr-1 group-hover:text-yellow-700' size={20}></ShoppingCart>
                          <span className='hidden sm:inline'>Cart</span>
						  <span className='absolute -top-2 -left-2'>{cart.length}</span>
                            </Link>
                        )
                        }
                        {isAdmin && (
							<Link
								className='bg-yellow-800 hover:bg-yellow-800 text-white px-3 py-1 rounded-md font-medium
								 transition duration-300 ease-in-out flex items-center'
								to={"/dashboard"}
							>
								<Lock className='inline-block mr-1' size={18} />
								<span className='hidden sm:inline'>Dashboard</span>
							</Link>
						)}
                        {user ? (
							<button
								className='bg-stone-500 hover:bg-gray-400 text-white py-2 px-4 
						rounded-md flex items-center transition duration-300 ease-in-out'
								onClick={logout}>
								<LogOut size={18} />
								<span className='hidden sm:inline ml-2'>Log Out</span>
							</button>
						) : (
							<>
								<Link
									to={"/signup"}
									className='bg-yellow-700 hover:bg-yellow-800 text-white py-2 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out'
								>
									<UserPlus className='mr-2' size={18} />
									Sign Up
								</Link>
								<Link
									to={"/login"}
									className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out'
								>
									<LogIn className='mr-2' size={18} />
									Login
								</Link>
							</>
						)}
                    </nav>
                </div>

            </div>


        </header>
    )
}

export default Navbar