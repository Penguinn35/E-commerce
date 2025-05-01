import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { PlusCircle, Loader, Upload } from 'lucide-react'
import { productStore } from '../stores/useProductStore'

const categories = ["jean", "t-shirt", "shoe", "glasses", "jacket", "suit", "bag"];


const CreateProductForm = () => {
const {createProduct, loading} = productStore();

  const [newProduct, setNewProduct] = useState({
    name:"",
    description:"",
    category:"",
    price:"",
    image:"",
  })

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await createProduct(newProduct);
    setNewProduct({name:"",description:"",category:"",price:"",image:"",})
  } catch (error) {
    console.log("error: ", error);    
  }
 }

 const handleImageChange = (e) => {
  console.log("entered func");
  const file = e.target.files[0];
  if(file)
  {
  console.log("enter if...");

    const reader = new FileReader();

    reader.onloadend = () => {
      setNewProduct({...newProduct, image: reader.result});
    }
    reader.readAsDataURL(file);
  }
 }
  

  return (
   <motion.div
    className='bg-stone-300 max-w-xl mx-auto shadow-lg rounded-lg  mt-8 px-8 pb-8'
    initial={{opacity:0, y:20}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.8}}
   >
      <h2 className='text-yellow-600 text-2xl font-semibold mb-2 pt-4'>Thêm mới sản phẩm</h2>
      <form onSubmit={handleSubmit}>
        <div className='mt-4'>
        <label htmlFor='name' className='block text-sm font-medium text-stone-700'>
          Tên sản phẩm
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={newProduct.name}
          onChange={(e) => setNewProduct({...newProduct, name:e.target.value})}
          className='mt-1 block w-full bg-white border border-orange-300 rounded-md shadow-md
                      py-2 px-3 text-stone-700 focus:outline-none focus:ring-2
                      focus:ring-yellow-500 focus:border-yellow-500'
          required
        >
        </input>
        </div>

        <div className='mt-4'>
        <label htmlFor='Description' className='block text-sm font-medium text-stone-700'>
          Giới thiệu
        </label>
        <textarea
          id='Description'
          name='Description'
          value={newProduct.description}
          onChange={(e) => setNewProduct({...newProduct, description:e.target.value})}
          rows='3'
          className='mt-1 block w-full bg-white border border-orange-300 rounded-md shadow-md
                      py-2 px-3 text-stone-700 focus:outline-none focus:ring-2
                      focus:ring-yellow-500 focus:border-yellow-500'
          required
        >
        </textarea>
        </div>

        <div className='mt-4'>
        <label htmlFor='price' className='block text-sm font-medium text-stone-700'>
          Giá
        </label>
        <input
          type='number'
          id='price'
          name='price'
          step={0.01}
          value={newProduct.price}
          onChange={(e) => setNewProduct({...newProduct, price:e.target.value})}
          className='mt-1 block w-full bg-white border border-orange-300 rounded-md shadow-md
                      py-2 px-3 text-stone-700 focus:outline-none focus:ring-2
                      focus:ring-yellow-500 focus:border-yellow-500'
          required
        >
        </input>
        </div>

        <div className='mt-4'>
        <label htmlFor='category' className='block text-sm font-medium text-stone-700'>
          Nhóm
        </label>
        <select
          
          id='category'
          name='category'
          value={newProduct.category}
          onChange={(e) => setNewProduct({...newProduct, category:e.target.value})}
          className=' mt-1 block w-full bg-white border border-orange-300 rounded-md shadow-md
                      py-2 px-3 text-stone-700 focus:outline-none focus:ring-2
                      focus:ring-yellow-500 focus:border-yellow-500'
          required
        >
          <option value=''>Chọn nhóm sản phẩm</option>
          {categories.map((category) => {
            return <option key={category} value={category}>{category}</option>
          })}
        </select>
        </div>

        <div className='mt-4'>
        <input
          type='file'
          id='image'
          name='image'
          className='sr-only'
          accept='image/*'
          onChange={handleImageChange}
        />
        <label
          htmlFor='image'
          className='cursor-pointer bg-yellow-600 py-2 px-3 border border-yellow-500
                      rounded-md shadow-md text-sm leading-4 font-medium text-stone-700
                      hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-0
                      focus:ring-yellow-400' 
        ><Upload className=' h-5 w-5 inline-block mr-2'/>
        Hình ảnh
        </label>

        {newProduct.image&&<span className=' ml-3 text-sm text-stone-600'>Hình ảnh đã được cập nhật</span>}
        
        </div>
        
        <button
					type='submit'
					className=' mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
					shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 
					focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ye;;ơ-500 disabled:opacity-50'
					disabled={loading}
				>
					{loading ? (
						<>
							<Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
							Loading...
						</>
					) : (
						<>
							<PlusCircle className='mr-2 h-5 w-5' />
							Thêm sản phẩm
						</>
					)}
				</button>

      </form>

   </motion.div>
  )
} 

export default CreateProductForm