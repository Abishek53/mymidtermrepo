import React, { useState } from 'react';
import './AddProduct.css'; 
const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(productData));
    console.log(productData);
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={productData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={productData.description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          value={productData.category}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={productData.quantity}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          value={productData.price}
          onChange={handleChange}
        />
      </div>

      <div className="form-buttons">
        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </div>
    </form>
  );
};

export default AddProduct;
