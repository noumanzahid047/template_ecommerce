import Product from '../../models/products.js'

export const updateProduct = async (req,res)=>{
    try {
        let product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product Not Found"
            })
        }
        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
        res.status(200).json({
            success: true,
            message: "Template Updated Successfully",
            product
        })
          
    } catch (error) {  
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}