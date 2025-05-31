import { create } from "zustand";
import axios from "../lib/axios";
import { toast } from"react-hot-toast";

export const cartStore = create((set,get) => ({
    cart:[],
    coupon:null,
    total:0,
    subTotal:0,

    getCartItem: async() => {
        try {
            const response = await axios.get("/cart");
            set({cart: response.data})
        const {cart } = get();

            console.log("in func: ", cart);
            get().calculateTotal();
        } catch (error) {
            set({cart:[]});
            toast.error(error.response.data.error|| "an error ocurred when getting cartItem");
        }
    }, 
 
    addToCart: async(product) => {
        try {
            await axios.post("/cart", {productId: product._id});
            toast.success("Product added to cart");

            set((prevState) => {
                console.log("cart before update:", prevState.cart);
                const existingItem = prevState.cart.find((item) => item._id === product._id);
                const newCart = existingItem
                ? prevState.cart.map((item) => (item._id === product._id?{...item, quantity: item.quantity+1}: item))
                : [...prevState.cart, {...product, quantity: 1}];
                return {cart: newCart};

            })
            get().calculateTotal();

        } catch (error) {
            console.error("Add to cart failed:", error);
            toast.error(error.response.data.error||"An error ocurred");
        }
    },

    removeFromCart: async(productId) => {
        try {
            axios.delete(`/cart/${productId}`);
            set((prevState) => ({cart: prevState.cart.filter((item) => item._id != productId)}));
            get().calculateTotal();
        } catch (error) {
            toast.error(error||"cant remove from cart");
        }
    },
    
    clearCart: async() => {
        try {
            axios.delete('/cart');
            set({cart: [], coupond: null, total: 0, subTotal: 0});
        } catch (error) {
            toast.error(error||"cant clear cart");
        }
    },

    updateQuantity: async (productId, quantity) => {
		if (quantity === 0) {
			get().removeFromCart(productId);
			return;
		}

		await axios.put(`/cart/${productId}`, { quantity });
		set((prevState) => ({
			cart: prevState.cart.map((item) => (item._id === productId ? { ...item, quantity } : item)),
		}));
		get().calculateTotal();
	},

    calculateTotal: () => {
        const {cart, coupon } = get();
        const subTotal = cart.reduce((sum, item) => sum + item.price * item.quantity,0);
        let total = subTotal;
        if(coupon)
        {
            total = subTotal - subTotal * (coupon.discontPercentage / 100);
        }
        set({subTotal, total});
    }
}))