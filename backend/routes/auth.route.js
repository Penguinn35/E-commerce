import express from "express";
import {login, logout, signup, refreshToken, getProfile, googleLogin, } from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js";
import passport from "../lib/passport.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login",login);
router.post("/logout",logout);
router.post("/refresh-token", refreshToken);
router.get("/profile", protectRoute, getProfile);

// Google OAuth Routes
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { 
    session: false, 
    failureRedirect: "/login", 
  }),
  googleLogin 
);

export default router