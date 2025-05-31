import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { productStore } from "../stores/useProductStore.js"
import FeaturedProducts from "../components/FeaturedProducts.jsx";

const categories = [
  { href: "/jean", name: "Jeans", imageUrl: "/jeans.jpg", descript: "Jeans retro từ những 1990s" },
  { href: "/t-shirt", name: "Áo thun", imageUrl: "/tshirts.jpg", descript: "Áo thun mới" },
  { href: "/shoe", name: "Giày", imageUrl: "/shoes.jpg", descript: "Đôi giày cho riêng bạn" },
  { href: "/glasses", name: "Kính", imageUrl: "/glasses.jpg", descript: "Kính có tròng" },
  { href: "/jacket", name: "Áo khoác", imageUrl: "/jackets.jpg", descript: "Áo khoác, không điêu" },
  { href: "/suit", name: "Suits", imageUrl: "/suits.jpg", descript: "Cho những cuộc họp lớn" },
  { href: "/bag", name: "Ba lô", imageUrl: "/bags.jpg", descript: "Thế giới sau lưng bạn" },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, loading } = productStore();
  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts])

  return (
    <div className=' relative bg-amber-50 min-h-screen text-white overflow-hidden'>
      <div className=' relative z-10 max-w-full mx-auto pt-16'>
        <div className='border-4 border-yellow-600 rounded-3xl mt-10 px-4 mb-12'>
          <h1 className='text-center text-8xl sm:text-10xl font-extrabold  text-stone-600 mb-10 mt-2'>
            CONG'S store
          </h1>

          <div className="relative w-full aspect-[2/1] overflow-hidden mb-4">

            <img
              src="/model.png"
              alt="thumbnail"
              className=" rounded-3xl w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <p id="bestseller" className=' text-6xl text-black text-center font-bold tracking-wider  '>BESTSELLER</p>
          {!loading && products?.length > 0 && <FeaturedProducts featuredProducts={products} />}
        </div>
        <div className="max-w-full">
          <p id="collections" className='text-6xl text-black text-center mb-4 font-bold'>COLLECTIONS</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  max-w-4xl sm:max-w-6xl lg:max-w-7xl mx-auto px-8'>
            {categories.map((cate) => (
              <CategoryItem category={cate} key={cate.name}></CategoryItem>
            ))}
          </div>
        </div>

        <div className=' w-full'>
          <div id="sales" className="text-6xl text-black text-center font-bold tracking-wider my-8">
            sales
          </div>
          <div className=' flex flex-row bg-amber-500 h-150 '>
            <div className='flex-1/2 flex flex-col text-center justify-center'>
            <h1 className='text-black font-bold text-4xl my-4'>MAGIC BLACK FRIDAY</h1>
            <p className='text-black font-bold text-6xl my-4'>69%</p>

            </div>
            <img src="/bags.jpg" alt="model" className="object-fill  flex-1/2" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default HomePage

