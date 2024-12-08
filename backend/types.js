const zod=require("zod");

const zodschema=zod.object({
    naam:zod.string(),
    price:zod.string(),
    pic:zod.string()
})

const zodupdate=zod.object({
    id:zod.string(),
    naam:zod.string(),
    price:zod.string(),
    pic:zod.string()    
})
module.exports={
    zodschema:zodschema,
    zodupdate:zodupdate
}