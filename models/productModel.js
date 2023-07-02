import mongoose, {Schema}  from "mongoose";

const productSchema = new mongoose.Schema({
    idProduct: {
        type: String,
        required: true,
    },
    nameProduct: {
        type: String,
        required: true,
    },
    nameBrand: {
        type: String,
        required: true,
    },
    priceProduct: {
        type: String,
        require: true,
    },
    Image: {
        type: Buffer,
        require: true,
    },
    desProduct:{
        type: String,
        require:false,
    },
}); {timestamps : true}

export default mongoose.model("Product", productSchema)
