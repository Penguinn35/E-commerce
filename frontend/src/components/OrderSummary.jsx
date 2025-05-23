import React from 'react'
import { cartStore } from '../stores/cartStore';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

const OrderSummary = () => {
  const {total, subTotal, clearCart } = cartStore();
  const saved = total - subTotal;

  const formattedSubtotal = subTotal.toFixed(2);
	const formattedTotal = total.toFixed(2);
	const formattedSavings = saved.toFixed(2);

  return (
    <div className='space-y-4 rounded-lg border border-yellow-500 bg-orange-100/50 p-4 shadow-sm sm:p-6'>
			<p className='text-xl font-semibold text-stone-700'>Thanh toán</p>

			<div className='space-y-4'>
				<div className='space-y-2'>
					<dl className='flex items-center justify-between gap-4'>
						<dt className='text-base font-normal text-yellow-600'>Giá gốc</dt>
						<dd className='text-base font-medium text-yellow-600'>{formattedSubtotal} nvđ</dd>
					</dl>

					

					
					<dl className='flex items-center justify-between gap-4 border-t border-gray-600 pt-2'>
						<dt className='text-base font-bold text-yellow-600'>Tổng</dt>
						<dd className=' font-bold text-yellow-700 text-2xl'>${formattedTotal}</dd>
					</dl>
				</div>

				<motion.button
					className='flex w-full items-center justify-center rounded-lg bg-yellow-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-500'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={clearCart}
				>
					Đi đến thanh toán
				</motion.button>

				<div className='flex items-center justify-center gap-2'>
					<span className='text-sm font-normal text-gray-400'>hoặc</span>
					<Link
						to='/'
						className='inline-flex items-center gap-2 text-sm font-medium text-yellow-600 underline hover:text-yellow-500 hover:no-underline'
					>
						Tiếp tục mua sắm
						<MoveRight size={16} />
					</Link>
				</div>
			</div>
		</div>
  )
}

export default OrderSummary