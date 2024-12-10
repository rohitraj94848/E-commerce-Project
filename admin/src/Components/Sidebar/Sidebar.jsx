import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import add_product_icon from '../../assets/Product_Cart.svg';
import list_product_icon from '../../assets/Product_list_icon.svg';
//import cart_icon from '../Assets/cart_icon.png'; 
import cart_icon from '../../../../frontend/src/Components/Assets/cart_icon.png'; 

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/addproduct' style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="Add Product" />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to='/listproduct' style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="Product List" />
          <p>Product List</p>
        </div>
      </Link>

      <Link to='/orders' style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={cart_icon} alt="Orders" /> {/* Ensure the path to orders_icon.svg is correct */}
          <p>Orders</p>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
