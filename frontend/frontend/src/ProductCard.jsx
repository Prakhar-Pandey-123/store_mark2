import React,{useState} from "react";
import "./ProductCard.css";

function ProductCard({product, setProducts }) {
    const [isEditing,setIsEditing]=useState(false);
    const [updatedProduct, setUpdatedProduct] = useState({
        naam: product.naam,
        pic: product.pic,
        price: product.price
      });
    async function handleDelete() {
        const res = await fetch("http://localhost:2000/delete",
            {
                method: "DELETE",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({id:product._id})
            })
        if(res.ok){
            const data=await res.json();
            const res2=await fetch("http://localhost:2000/get");
            const data2=await res2.json();
            return setProducts(data2.products);
        }
    }
   async function handleSubmit(){
    const res=await fetch("http://localhost:2000/update",{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            id:product._id,
            naam:updatedProduct.naam,
            pic:updatedProduct.pic,
            price:updatedProduct.price
        })
    })
    if(res.ok){
        const data=await res.json();
        const res1=await fetch("http://localhost:2000/get");
        const data1=await res1.json();
        setProducts(data1.products);
        setIsEditing(false);
    }
   }
    return (
 <div className="product-card">
     <img className="product-image" src={product.pic} />
     <div className="product-info">
         {!isEditing?(<div>
         <h3 className="product-name">{ product.naam}</h3>
         <p className="product-price">PRICE : $ {product.price}</p>
         <button onClick={function(){
            setIsEditing(true)
         }}>EDIT</button></div>)
         :(
            <div>
            <input type="text"
            value={updatedProduct.naam}
            onChange={function(e){
                setUpdatedProduct({...updatedProduct,naam:e.target.value})
            }}
            ></input>
            <input type="text"
            value={updatedProduct.pic}
            onChange={function(e){
                setUpdatedProduct({...updatedProduct,pic:e.target.value})
            }}
            placeholder="Image URL"
            >
            </input>
            <input
            type="text"
            value={updatedProduct.price}
            onChange={function(e){
                setUpdatedProduct({...updatedProduct,price:e.target.value})
            }}
            placeholder="Price"
            >
            </input>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={function(){
                setIsEditing(false)
            }}>cancel</button>
            </div>
         )}
             
         <button onClick={handleDelete}>✖️</button>
         
     </div>
     
 </div>)
}
export default ProductCard