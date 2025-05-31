import express from "express";
import dotenv from "dotenv";
import path from "path";
import authRoute from "./routes/auth.route.js"
import productRoute from "./routes/product.route.js"
import cartRoute from "./routes/cart.route.js"
import couponRoute from "./routes/coupon.route.js"
import paymentRoute from "./routes/payment.route.js"
import analyticsRoutes from "./routes/analytics.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

import cors from "cors";


dotenv.config();

const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve();

app.use(
    cors({
      origin: "http://localhost:5173", // Allow only your frontend
      credentials: true, // Allow cookies (if needed)
    })
  );

app.use(express.json({limit:"10mb"}));
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/coupons", couponRoute);
app.use("/api/payments", paymentRoute);
app.use("/api/analytics", analyticsRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}


app.listen(PORT, () => {
    console.log("server is running at " + PORT);
    connectDB();
});

