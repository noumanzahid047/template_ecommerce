import Product from '../../models/products.js'
import ApiFeatures from '../../utils/apiFeatures.js';

export const getProducts = async (req, res) =>{
    try {
        const productCount = await Product.countDocuments();
        const apiFeature = new ApiFeatures (Product.find(), req.query).search().filter();
        const products = await apiFeature.query;

        res.status(200).json({
            success: true,
            products,
            productCount,
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}