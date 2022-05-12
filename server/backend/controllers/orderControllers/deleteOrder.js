import Order from "../../models/orders.js"

export const getSingleOrder = async (req,res) => {
    try {
        const order = await Order.find(req.params.id);

        if(!order){
            return res.status(404).json({
                success: false,
                message: "No order Found"
            })
        }
        await order.remove();
        res.status(404).json({
            success: true,
            message: "Order Deleted Successfully"
        })
        
    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}