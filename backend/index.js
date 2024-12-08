const express=require("express");
const app= express();
const {mongpro} =require("./db.js")
const {zodschema,zodupdate}= require("./types.js");
const cors=require("cors");
app.use(cors());
app.use(express.json());

app.post("/post",async function(req,res){
    const item = req.body;
    const parseditem= zodschema.safeParse(item);
    if(!parseditem.success)
    return res.status(411).json({msg:"wrong inputs"});
    const product=await mongpro.create({
        naam:req.body.naam,
        price:req.body.price,
        pic:req.body.pic
    });
    return res.send(product);
})
app.get("/get",async function(req,res){
    const products=await mongpro.find({})
    return res.json({products:products});
})
app.put("/update",async function(req,res){
    const updation=req.body;
    const parsedupdate=zodupdate.safeParse(updation)
    if(!parsedupdate.success)
    return res.status(411).json({msg:"wrong inputs"});
    const updated=await mongpro.findByIdAndUpdate({_id:updation.id},{
        naam:updation.naam,
        price:updation.price,
        pic:updation.pic
    })
    return res.json({updated:updated})
})
app.delete("/delete",async function(req,res){
    const idtodel=req.body;
    const deleted=await mongpro.findByIdAndDelete(idtodel.id);
   return res.json({deleted:deleted});
})
app.listen(2000,function(){
    console.log("app is listening at the port 2000")
})