import Order from "../../models/orders.js"

export const getSingleOrder = async (req,res) => {
    try {
        const order = await Order.findById(req.params.id).populate(
            'user',
            'name email'
        );

        if(!order){
            return res(404).json({
                success: false,
                message: "Order Not fount"
            });
        }
        res.status(200).json({
            success: true,
            message: "Order Found Successfully",
            order,
        });


    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}