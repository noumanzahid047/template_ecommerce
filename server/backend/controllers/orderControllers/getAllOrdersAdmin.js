import Order from "../../models/orders.js"

export const getAllOrder = async (req,res) => {
    try {
        const orders = await Order.find();

        let totalAmount =0;
        orders.forEach((order)=>{
            totalAmount+= order.totalPrice;
        });

        res.status(200).json({
            success: true,
            totalAmount,
            orders
        })
    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}