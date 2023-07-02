// import Product from "../models/productModel.js";
// import expressAsyncHandler from "express-async-handler";


// const getProducts = expressAsyncHandler(async (req, res) => {
//     const page = req.query.page();
//     const products = await Product.find().limit(parseInt(page) * 4).skip((parseInt(page) - 1) * 4).lean();
//     console.log(req.query)

//     if (!products.length) {
//         res.status(400).json({message: "No product was found!"});
//         return;
//     }
//     res.json(products);
// })

// const addProduct = expressAsyncHandler(async (req, res) => {
//     const { idProduct, nameProduct, nameBrand, priceProduct, desProduct} = req.body;

//     if (!idProduct || !nameProduct || !nameBrand || !priceProduct || !desProduct) {
//         res.status(404).json({message: "..."})
//         return;
//     }

//     const product = await Product.findOne({ id: idProduct}).lean().exec();

//     if(product?.name === name) {
//         res.status(400).json({message: "Product already exists"})
//         return;
//     }

//     const add = await Product.create({idProduct, nameProduct, nameBrand, priceProduct, desProduct});
//     if(add) {
//         res.status(201).json({message: "New product ${name} was added"});

//     }else {
//         res.status(400).json({message: "Invalid product!"});
//     }
// });

// const editProduct = expressAsyncHandler(async (req, res) => {
//     const {idProduct, nameProduct, priceProduct} = req.body;

//     if (!idProduct || !nameProduct || !priceProduct) {
//         res.status(400).json({message: "Fields are required"});
//         return;
//     }

//     const product = await Product.findById(idProduct).exec();

//     if (!product) {
//         res.status(404).json({message: "Product not found"});
//         return;
//     }

//     const update = await product.save();
//     res.json({message: "${name} updated"});
// });

// const deleteProduct = expressAsyncHandler(async (req, res) => {
//     const {idProduct} = req.body;

//     if (!id) {
//         res.status(400).json({message: " Fields are required"});
//         return;
//     }

//     const product = await Product.findById(idProduct).exec();

//     if (!product) {
//         res.status(400).json({message: "Product not found!"});
//         return;
//     }

//     const deleted = await product.deleteOne();
//     res.json({message: `${idProduct} was deleted`});
// });

// export {getProducts, addProduct, editProduct, deleteProduct};

