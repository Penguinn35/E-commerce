import React from 'react'
import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { userStore } from '../stores/useUserStore';
import { cartStore } from '../stores/cartStore';


const Navbar = () => {
	const { user, logout } = userStore();
	const isAdmin = user ? user.role === "admin" : null;
	const { cart } = cartStore();
	// const user = true;
	// const isAdmin = true;
	return (
		<header className='fixed top-0 left-0 w-full bg-none    z-40 transition-all duration-300 '>
			<div className='container mx-auto py-3 px-4'>
				<div className='flex  flex-wrap justify-between items-center'>
					<a href='/' className='text-5xl/tight text-center justify-center font-bold bg-white w-16 h-16   justify-center   rounded-4xl shadow-lg text-gray-700 items-center space-x-2 flex'>
						C
					</a>
					<nav className=' px-8 bg-white rounded-lg flex flex-row space-x-6 my-4'>


						<a href="/" className="font-bold relative inline-flex items-center justify-center px-2 py-2.5 overflow-hidden tracking-tighter text-black bg-white group">
							<span className="absolute w-0 h-0 transition-all duration-500 ease-out rounded-full bg-yellow-600 group-hover:w-56 group-hover:h-56"></span>
							<span className="absolute inset-0 w-full h-full -mt-1 opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
							<span className="relative text-base font-semibold">Home</span>
						</a>
						<a href="#bestseller" className="font-bold relative inline-flex items-center justify-center px-2 py-2.5 overflow-hidden tracking-tighter text-black bg-white group">
							<span className="absolute w-0 h-0 transition-all duration-500 ease-out rounded-full bg-yellow-600 group-hover:w-56 group-hover:h-56"></span>
							<span className="absolute inset-0 w-full h-full -mt-1 opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
							<span className="relative text-base font-semibold">bestseller</span>
						</a>
						<a href="#collections" className="font-bold relative inline-flex items-center justify-center px-2 py-2.5 overflow-hidden tracking-tighter text-black bg-white group">
							<span className="absolute w-0 h-0 transition-all duration-500 ease-out rounded-full bg-yellow-600 group-hover:w-56 group-hover:h-56"></span>
							<span className="absolute inset-0 w-full h-full -mt-1 opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
							<span className="relative text-base font-semibold">collections</span>
						</a>
						<a href="#sales" className="font-bold relative inline-flex items-center justify-center px-2 py-2.5 overflow-hidden tracking-tighter text-black bg-white group">
							<span className="absolute w-0 h-0 transition-all duration-500 ease-out rounded-full bg-yellow-600 group-hover:w-56 group-hover:h-56"></span>
							<span className="absolute inset-0 w-full h-full -mt-1 opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
							<span className="relative text-base font-semibold">sales</span>
						</a>
						



					</nav>
					<nav className='flex flex-wrap items-center gap-4 text-gray-700 '>
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