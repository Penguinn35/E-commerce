import React from 'react'
import { ShoppingCart } from 'lucide-react';
import {userStore} from '../stores/useUserStore.js'
import toast from 'react-hot-toast';
import { cartStore } from '../stores/cartStore.js';

const ProductCard = ({product}) => {
    const {user} = userStore();
    const {addToCart} = cartStore();
    const handleAddToCart = () => {
        if(!user)
        {
            toast.error("please login to add to card", {id: "1"});
        }
        else {
            addToCart(product);
        }
    }
  return (
    <div className='flex w-full relative flex-col overflow-hidden rounded-lg border border-orange-500 shadow-lg'>
			<div className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'>
				<img className='object-cover w-full' src={product.image} alt='product image' />
			</div>

			<div className='mt-4 px-5 pb-5'>
				<h5 className='text-xl font-semibold tracking-tight text-stone-700'>{product.name}</h5>
				<div className='mt-2 mb-5 flex items-center justify-between'>
					<p>
						<span className='text-3xl font-bold text-yellow-700'>{product.price} vnđ</span>
					</p>
				</div>
				<button
					className='flex items-center justify-center rounded-lg bg-yellow-600 px-5 py-2.5 text-center text-sm font-medium
					 text-white hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-500'
					onClick={handleAddToCart}
				>
					<ShoppingCart size={22} className='mr-2' />
					Thêm vào giỏ hàng
				</button>
			</div>
		</div>
  )
};

export default ProductCard;