const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost:27017/")
const proschema=mongoose.Schema({
    naam:String,
    price:String,
    pic:String
})
const mongpro=mongoose.model("proschema",proschema);
module.exports={
    mongpro:mongpro
}