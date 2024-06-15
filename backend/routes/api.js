import express from "express";
const router = express.Router();
import Item from "../models/item.js";

router.get('/items',async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items); 
    }catch(err){
        res.status(500).json({message: err.message})
    }
});

router.post('/items', async(req,res) => {
    const item = new Item({
        name: req.body.name, 
        price: req.body.price,
    })

    try{
        const newItem = await item.save();
        res.status(201).json(newItem);
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

router.delete('/items/:id', async(req, res) => {
    try{
        await Item.findByIdAndDelete(req.params.id)
        res.json({message: 'Item deleted'})
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

export default router