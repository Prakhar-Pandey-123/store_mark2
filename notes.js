// // App.js
// import React, { useEffect, useState } from 'react';
// import ProductCard from './ProductCard';
// import './App.css';     

// function App() {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({ naam: '', price: '', pic: '', id: '' });
//   const [isUpdate, setIsUpdate] = useState(false);

//   // Fetch products from the backend
//   async function fetchProducts(){
//     const res=await fetch('http://localhost:2000/get')
//     const data=await res.json();
//     setProducts(data.products);
//   };

//   useEffect(function(){
//     fetchProducts();
//   }, []);

//   // Handle input change for form
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   // Add new product
//   const handleAddProduct = () => {
//     fetch('http://localhost:2000/post', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ naam: form.naam, price: form.price, pic: form.pic }),
//     })
//       .then((response) => response.json())
//       .then(() => {
//         setForm({ naam: '', price: '', pic: '', id: '' });
//         fetchProducts();
//       });
//   };

//   // Update product
//   const handleUpdateProduct = () => {
//     fetch('http://localhost:2000/update', {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id: form.id, naam: form.naam, price: form.price, pic: form.pic }),
//     })
//       .then((response) => response.json())
//       .then(() => {
//         setForm({ naam: '', price: '', pic: '', id: '' });
//         setIsUpdate(false);
//         fetchProducts();
//       });
//   };

//   // Delete product
//   const handleDeleteProduct = (id) => {
//     fetch('http://localhost:2000/delete', {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id }),
//     })
//       .then((response) => response.json())
//       .then(() => fetchProducts());
//   };

//   return (
//     <div className="App">
//       <h1>Product Store</h1>
//       <div className="form">
//         <input type="text" name="naam" placeholder="Name" value={form.naam} onChange={handleChange} />
//         <input type="text" name="price" placeholder="Price" value={form.price} onChange={handleChange} />
//         <input type="text" name="pic" placeholder="Image URL" value={form.pic} onChange={handleChange} />
//         {isUpdate ? (
//           <button onClick={handleUpdateProduct}>Update Product</button>
//         ) : (
//           <button onClick={handleAddProduct}>Add Product</button>
//         )}
//       </div>
//       <div className="product-list">
//         {products.map((product) => (
//           <ProductCard
//             key={product._id}
//             product={product}
//             onDelete={() => handleDeleteProduct(product._id)}
//             onEdit={() => {
//               setForm({ naam: product.naam, price: product.price, pic: product.pic, id: product._id });
//               setIsUpdate(true);
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
// // end of App.js
// //
// // ProductCard.js
// import React from 'react';
// import './ProductCard.css';

// function ProductCard({ product, onDelete, onEdit }) {
//   return (
//     <div className="product-card">
//       <img src={product.pic} alt={product.naam} className="product-image" />
//       <div className="product-info">
//         <h3 className="product-name">{product.naam}</h3>
//         <p className="product-price">${product.price}</p>
//         <div className="product-buttons">
//           <button onClick={onEdit} className="edit-button">Edit</button>
//           <button onClick={onDelete} className="delete-button">Delete</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
// // end of product card.jsx
// //product card.css
// .product-card {
//     background-color: #1e1e2f;
//     border-radius: 8px;
//     display: flex;
//     padding: 16px;
//     margin: 16px 0;
//   }
  
//   .product-image {
//     width: 150px;
//     height: auto;
//     border-radius: 8px;
//   }
  
//   .product-info {
//     margin-left: 16px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }
  
//   .product-name {
//     font-size: 1.2em;
//     font-weight: bold;
//   }
  
//   .product-price {
//     color: #4caf50;
//     font-size: 1.1em;
//   }
  
//   .product-buttons {
//     display: flex;
//     gap: 8px;
//   }
  
//   .edit-button {
//     background-color: #4caf50;
//   }
  
//   .delete-button {
//     background-color: #e57373;
//   }
//   // end of product card.css
//   //app.css
//   /* App.css */
// .App {
//   padding: 20px;
//   color: #ffffff;
//   background-color: #121212;
// }

// h1 {
//   text-align: center;
//   color: #4caf50;
// }

// .form {
//   display: flex;
//   gap: 10px;
//   margin: 20px 0;
//   justify-content: center;
// }

// input {
//   padding: 10px;
//   border-radius: 5px;
//   border: 1px solid #ddd;
// }

// button {
//   padding: 10px 15px;
//   border-radius: 5px;
//   border: none;
//   color: #ffffff;
//   cursor: pointer;
// }


// //end of app.css