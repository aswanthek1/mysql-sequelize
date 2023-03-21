const db = require('../models')

///models
const Product = db.products
const Review = db.reviews


////create product

const addProduct = async(req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published: false,
    }

    const product = await Product.create(info)
    res.status(200).json(product)
}


////get all products

const getAllProducts = async(req, res) => {
    let products = await Product.findAll({ 
        attributes:[
            'title','price'
        ]
     })
    res.status(200).json(products)
}


////get singlw product
const getOneProduct = async(req, res) => {
    let id = req.params.id
    let product = await Product.findeOne({where:{id:id}})
    res.status(200).json(product)
}


///update product

const updateProduct = async(req, res) => {
    const id = req.params.id
    const product = await Product.update(req.body, {where: {id: id}})
    res.status(200).json(product)
}

///delte product
const deleteProduct = async(req, res) => {
    let id = req.params.id
    await Product.destroy({where : {id:id}})
    res.status(200).json('deleted')
}

///get published product
const getPublishedProduct = async(req, res) => {
    const products = await Product.findAll({where:{published:true}})
    res.status(200).json(products)
}

module.exports = {
    addProduct,getAllProducts,getOneProduct,updateProduct, deleteProduct, getPublishedProduct
}