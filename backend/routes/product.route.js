import express from "express";
import { toggleFeaturedProduct, getProductsByCategory,getRecommendedProducts, deleteProduct,createProduct,getAllProducts,getFeaturedProducts } from "../controllers/product.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/",protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/recommendation", getRecommendedProducts);
router.post("/",protectRoute, adminRoute, createProduct);
router.patch("/:id",toggleFeaturedProduct);
router.delete("/:id",protectRoute, adminRoute, deleteProduct);

export default router; 