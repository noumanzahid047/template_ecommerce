import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter Title"]
    },
    price: {
        type: Number,
        required: [true, "Please Enter Price"]
    },
    detail: {
        type: String,
        required: [true, "Please Enter Template Detail"]
    },
    image:[
        {
        public_id:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        }
        }
    ],
    ratings:{
        type: Number,
        default: 0
    },
    owner: {
        type: String,
        required: [true, "Please Enter Owner Name"]
    },
    category:{
        type: String,
        required: [true,"Please Enter Category"]
    },
    numOfReviews:{
        type: Number,
        default:0
    },
    reviews:[
        {
             user: {
                 type: mongoose.Schema.ObjectId,
                 ref: "User",
                 required: true,
             },
            name: {
                type: String,
                required: true
            },
            rating:{
                type:Number,
                required: true,
            },
            comment:{
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const ProductSchema = mongoose.model("Product", productSchema);

export default ProductSchema;