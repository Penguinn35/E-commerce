import Coupon from "../models/coupon.model.js"; 
export const getCoupons = async (req, res) => {
    try {
        const coupond = await Coupon.findOne({userId: req.user._id, isActive: true});
        res.json(coupond||null);
    } catch (error) {
        console.log("Error in getCoupons controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const validateCoupon = async (req, res) => {
    try {
        const {code} = req.body;
        const coupon = await Coupon.findOne({code: code,userId: req.user._id, isActive: true});
        if(!coupon){
            return res.status(400).json({ message: "coupon not found" });
        }
        if(coupon.expirationDate < Date.now()){
            coupon.isActive = false;
            await coupon.save();
            return res.status(404).json({ message: "coupon expired" });
        }
        res.json({
            message: "coupon is valid",
            code: coupon.code,
            discountPercentage: coupon.discountPercentage
        })
    } catch (error) {
        console.log("Error in validateCoupon controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}