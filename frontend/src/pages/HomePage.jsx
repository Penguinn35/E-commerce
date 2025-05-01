import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { productStore } from "../stores/useProductStore.js"
import FeaturedProducts from "../components/FeaturedProducts.jsx";

const categories = [
  { href: "/jean", name: "Jeans", imageUrl: "/jeans.jpg", descript:"Jeans retro từ những 1990s" },
  { href: "/t-shirt", name: "Áo thun", imageUrl: "/tshirts.jpg", descript:"Áo thun mới" },
  { href: "/shoe", name: "Giày", imageUrl: "/shoes.jpg", descript:"Đôi giày cho riêng bạn" },
  { href: "/glasses", name: "Kính", imageUrl: "/glasses.jpg", descript:"Kính có tròng" },
  { href: "/jacket", name: "Áo khoác", imageUrl: "/jackets.jpg", descript: "Áo khoác, không điêu"},
  { href: "/suit", name: "Suits", imageUrl: "/suits.jpg", descript:"Cho những cuộc họp lớn" },
  { href: "/bag", name: "Ba lô", imageUrl: "/bags.jpg", descript: "Thế giới sau lưng bạn"},
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, loading } = productStore();
  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts])

  return (
    <div className=' relative bg-amber-50 min-h-screen text-white overflow-hidden'>
      <div className=' relative z-10 max-w-full mx-auto   py-16'>
        <h1 className='text-center text-8xl sm:text-10xl font-extrabold  text-stone-600 mb-10 mt-10'>
          CONG'S store
        </h1>

        <div className="relative w-full aspect-[2/1] overflow-hidden mb-10">

          <img
            src="/model.png"
            alt="thumbnail"
            className=" w-full h-full object-cover"
          />
        </div>
        <p className='text-center text-xl text-gray-400 mb-20'>
          Hy vọng project nho nhỏ này sẽ giúp em tìm được vị trí thực tập để học hỏi thêm ạ
        </p>
        <div className="max-w-full">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  max-w-4xl sm:max-w-6xl lg:max-w-7xl mx-auto px-8'>
          {categories.map((cate) => (
            <CategoryItem category={cate} key={cate.name}></CategoryItem>
          ))}
        </div>
        </div>
      </div>
      {!loading && products?.length > 0 && <FeaturedProducts featuredProducts={products} />}
    </div>
  )
}

export default HomePage

