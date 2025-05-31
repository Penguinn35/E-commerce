import express from "express";
import {removeAllFromCart, updateQuantity, getCartProducts, addToCart, removeCart } from "../controllers/cart.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/",protectRoute, getCartProducts); 
router.post("/",protectRoute, addToCart); 
router.delete("/:id",protectRoute, removeAllFromCart); 
router.delete("/",protectRoute, removeCart); 
router.put("/:id",protectRoute, updateQuantity); 

export default router