import Product from '../../models/products.js'

export const getAllReviews = async (req, res) => {
    try {
        const product = await Product.findById(req.query.id);

        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product Not Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "ALL REVIEWS",
            reviews: product.reviews
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}