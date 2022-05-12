import Order from "../../models/orders.js"


export const newOrder = async (req, res) => {
    try {
        const {
            orderItems, 
            paymentInfo,
            itemprice,
            totalPrice,
        }= req.body;
        
        const order = await Order.create({
            orderItems, 
            paymentInfo,
            itemprice,
            totalPrice,
            paitAt: Date.now(),
            user: req.user._id,

        });
        res.status(200).json({
            success: true,
            message: "Oder Created Successfully",
            order,
        }); 
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}