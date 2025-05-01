import React from 'react'
import { Minus, Plus, Trash } from 'lucide-react'
import { cartStore } from '../stores/cartStore'

const CartItem = ({ item }) => {
	const { removeFromCart, updateQuantity } = cartStore();

	return (
		<div className=' border p-4 shadow-sm border-yellow-500 bg-orange-100/50 md:p-6'>
			<div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
				<div className='shrink-0 md:order-1 '>
					<img className='h-20 md:h-32 w-20 md:w-44 rounded object-cover' src={item.image} />
				</div>

				<div className='flex items-center justify-between md:order-3 md:justify-end'>
					<div className='flex items-center gap-2'>
						<button
							className='inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border
							 bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:ring-2
							  focus:ring-yellow-500'
							onClick={() => updateQuantity(item._id, item.quantity - 1)}
						>
							<Minus className='text-gray-300' />
						</button>
						<p className='text-orange-700 px-2 text-2xl'>{item.quantity}</p>
						<button
							className='inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border
							 bg-yellow-600 hover:bg-yellow-500 focus:outline-none 
						focus:ring-2 focus:ring-yellow-500'
							onClick={() => updateQuantity(item._id, item.quantity + 1)}
						>
							<Plus className='text-gray-300' />
						</button>
					</div>

					<div className='text-end md:order-4 md:w-32'>
						<p className='text-xl font-bold text-yellow-600'>{item.price} vnđ</p>
					</div>
				</div>

				<div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
					<p className='text-base font-medium text-stone-700 hover:text-stone-800 hover:underline'>
						{item.name}
					</p>
					<p className='text-sm text-yellow-600'>{item.description}</p>

					<div className='flex items-center gap-4'>
						<button
							className='inline-flex items-center text-sm font-medium text-red-400
							 hover:text-red-300 hover:underline'
							onClick={() => removeFromCart(item._id)}
						>
							<Trash />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem