import React from 'react'
import { productStore } from '../stores/useProductStore';
import { motion } from 'framer-motion';
import { Star, Trash } from 'lucide-react';
const ProductsList = () => {
  const { products, toggleFeaturedProduct, deleteProduct } = productStore();

  return (
    <motion.div
      className='bg-stone-300 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto mt-8'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <table className=' min-w-full divide-y divide-gray-700'>
        <thead className='bg-stone-500'>
          <tr>
            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>
              Sản phẩm
            </th>

            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>
              Giá
            </th>

            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>
              Loại
            </th>

            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>
              Nổi bật
            </th>

            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>
              Thay đổi
            </th>
          </tr>
        </thead>
        <tbody className='bg-orange-100 divide-y divide-orange-300'>
          {products?.map((product) => (
            <tr key={product._id} className='hover:bg-orange-200'>
              <td className='px-6 py-4 whitespace-nowrap'>
                <div className='flex items-center'>
                  <div className='flex-shrink-0 h-10 w-10'>
                    <img
                      className='h-10 w-10 rounded-full object-cover'
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className='ml-4'>
                    <div className='text-sm font-medium text-yellow-600'>{product.name}</div>
                  </div>
                </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-yellow-700'>{product.price.toFixed(2)} $</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-yellow-600'>{product.category}</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <button
                  onClick={() => toggleFeaturedProduct(product._id)}
                  className={`p-1 rounded-full ${product.isFeatured ?

                      "bg-yellow-500 text-gray-900"
                      : "bg-stone-400 text-gray-900"
                    }hover:bg-yellow-500  cursor-pointer`}>
                  <Star className=' h-5 w-5'></Star>
                </button>
              </td>

              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
								<button
									onClick={() => deleteProduct(product._id)}
									className='text-red-400 hover:text-red-300 cursor-pointer'
								>
									<Trash className='h-5 w-5' />
								</button>
							</td>
            </tr>
          ))}
        </tbody>
      </table>

    </motion.div>
  )
}

export default ProductsList