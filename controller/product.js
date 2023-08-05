const Product = require('../models/Product');

const getProducts = async (req, res) => {
    try {
        const product = await Product.find();
        return res.status(200).json({
            message: "Success",
            data: product
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById({ _id: id });
        return res.status(200).json({
            message: "Success",
            product
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }

};

const newProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        return res.status(200).json({
            message: "Success",
            product
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }

};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Product.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Success",
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
};


module.exports = {
    getProducts,
    getProduct,
    newProduct,
   
    deleteProduct,
   
}