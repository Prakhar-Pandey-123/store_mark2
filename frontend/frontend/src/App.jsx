import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./App.css";
function App() {
    const [products, setProducts] = useState([]);
    const [naam, setNaam] = useState("");
    const [price, setPrice] = useState("");
    const [pic, setPic] = useState("");
    const [isadding,setisadding]=useState(false);

    async function fetchproduct() {
        const res = await fetch("http://localhost:2000/get");
        const data = await res.json();
        setProducts(data.products);
    }
    useEffect(function () {
        fetchproduct();
    }, [])

    async function handleAddProduct(e) {
        e.preventDefault();
        const newproduct = { naam, price, pic };
        const res = await fetch("http://localhost:2000/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newproduct)
        });

        if (res.ok) {
            const data = await res.json();
            setProducts(function (prevProducts) { return [...prevProducts, data] });
            setNaam("");
            setPic("");
            setPrice("");
        }
    }

    return (
        <div className="App">
            <h1>
                PRODUCT STORE</h1>
                <button className="adding" onClick={function(){
                    setisadding(true);
                }}>+</button>
                {isadding?(<div>
                    <button className="home" onClick={function(){
                        setisadding(false);
                    }}>home</button>
            <form onSubmit={handleAddProduct}>
                <input
                    type="text" placeholder="ENTER NAME"
                    onChange={function (e) {
                        setNaam(e.target.value);
                    }}
                    value={naam} required
                ></input>
                <input
                    type="text" placeholder="ENTER PRICE"
                    onChange={function (e) {
                        setPrice(e.target.value);
                    }}
                    value={price} required
                ></input>
                <input type="text"
                    placeholder="UPLOAD IMAGE"
                    onChange={function (e) {
                        setPic(e.target.value);
                    }}
                    value={pic} required
                ></input>
                <button type="submit">Add Product</button>

            </form>
            </div>):(<div>
            <div className="product-container">{products.map(function (product) {
                return <ProductCard key={product._id} product={product}
                setProducts={setProducts} >
                </ProductCard>
            })
            }</div>
            </div>)}
        </div>
    )
}
export default App