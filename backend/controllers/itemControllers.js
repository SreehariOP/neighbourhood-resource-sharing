const items = require('../models/itemModel')

exports.getAllProducts = (req,res) =>{
    res.json(items);
}