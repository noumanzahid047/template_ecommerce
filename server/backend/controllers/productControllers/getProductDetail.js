import Product from '../../models/products.js'

export const getProductDetail = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
         if(!product){
             return res.status(404).json({
                 success: false,
                 message: "Template Not Found"
             })
         }
        res.status(200).json({
            success: true,
            message: "Template Deatils",
            product
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}