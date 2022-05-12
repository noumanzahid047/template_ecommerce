import Product from '../../models/products.js'

export const createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);

        res.status(201).json({
            success: true,
            message: "Product Created Successfully",
            product
        }) 
    } catch (error) {
        res.status(500).json({
            success: false,
            message : error.message
        })
    }
}