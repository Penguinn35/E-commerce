import { Route, Routes, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SignupPage from "./pages/SignupPage.jsx"
import AdminPage from "./pages/AdminPage.jsx"
import CategoryPage from"./pages/CategoryPage.jsx"
import CartPage from"./pages/CartPage.jsx"
import Navbar from "./components/Navbar.jsx"
import { Toaster } from "react-hot-toast"
import { userStore } from "./stores/useUserStore.js"
import { cartStore } from "./stores/cartStore"
import { useEffect } from "react"
import LoadingSpinner  from "./components/loadingSpinner.jsx"

function App() {
  const {user, checkAuth, checkingAuth} = userStore();
  const { getCartItem,cart } = cartStore();
  useEffect(() => {
    checkAuth();
  },[checkAuth]);

  useEffect(()=> {
    if(!user)
      return;
    getCartItem()
   
  },[getCartItem, user])

  if(checkingAuth){return <LoadingSpinner/>}


  return (
    <div className='min-h-screen bg-white text-white relative overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden'>
				<div className='absolute inset-0'>
					<div  />
				</div>
			</div>
      <div className='relative z-50 '>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={!user?<LoginPage/>:<Navigate to="/"/>}></Route>
        <Route path="/signup" element={!user?<SignupPage/>:<Navigate to="/"/>}></Route>
        <Route path="/dashboard" element={(user&&user.role === "admin")?<AdminPage/>:<Navigate to="/"/>}></Route>
        <Route path='/category/:category' element={<CategoryPage/>}></Route>
        <Route path='/cart' element={user?<CartPage/>:<Navigate to ='/login'/>}></Route>
      </Routes>
      </div>
      <Toaster/>
    </div>
  )
}

export default App
