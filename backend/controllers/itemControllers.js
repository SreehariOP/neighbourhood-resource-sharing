const items = require('../models/itemModel')

exports.getAllProducts = (req,res) =>{
    try{
        res.status(200).json(items);
    }
    catch(error){
        console.error("Error fetching items", error);
        res.status(500).json({error: "Internal Server Error"})
    }
    
}

exports.getSpecificProduct = (req,res)=> {
    try{
        const id = req.params.id;
        // console.log(id);
        const item = items.find((i)=> i.id === id);
        // console.log(item);
        if(!item){
            res.status(404).json({error: "Item not found"})
        }
        res.status(200).json(item)
    }catch(error){
        console.error("Error fetching specific item", error);
        res.status(500).json({error: "Something went wrong"});
    }

}