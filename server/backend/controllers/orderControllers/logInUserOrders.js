import Order from "../../models/orders.js"

export const myOrder = async (req,res) => {
    try {
        //console.log("Done");
        const orders = await Order.find({user: req.user._id});
       // console.log("Done2");
        // if(!orders){
        //     return res.status(404).json({
        //         success: false,
        //         message: "No Orders",
        //     })
        // }
        res.status(200).json({
            success: true,
            orders,
        })
        
    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}