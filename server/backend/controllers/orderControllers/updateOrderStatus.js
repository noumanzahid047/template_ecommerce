import Order from "../../models/orders.js"

export const getAllOrder = async (req,res) => {
    try {
        const order = await Order.find(req.params.id);
        if(order.orderStatus === "Delivered"){
            return res.status(400).json({
                success: false,
                message: "You have already Delivered this Order"
            })
        }
        order.orderStatus = req.body.status;

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