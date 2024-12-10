import React, { useEffect, useState } from 'react';
import './AdminOrders.css';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/orders');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className='admin-orders'>
      <h1>Orders</h1>
      <div className="orders-list">
        {orders.map((order, index) => (
          <div key={index} className="order-card">
            <h2>Order {index + 1}</h2>
            <p><strong>User:</strong> {order.user.name} ({order.user.email})</p>
            <p><strong>Address:</strong></p>
            <p>{order.address.fullName}</p>
            <p>{order.address.addressLine1}</p>
            <p>{order.address.city}, {order.address.state} {order.address.zip}</p>
            <p><strong>Products:</strong></p>
            <ul>
              {order.products
                .filter(product => product.quantity > 0) // Filter out products with quantity 0
                .map((product, idx) => (
                  <li key={idx} className="product-item">
                    <img src={product.image} alt={product.name} className="product-image" /> {/* Display product image */}
                    <div className="product-details">
                      <span>{product.name}</span> - {product.quantity} x ₹{product.price}
                    </div>
                  </li>
                ))}
            </ul>
            <p><strong>Total Amount:</strong> ₹{order.totalAmount}</p>
            {order.isDiscountApplied && (
              <p><strong>Discounted Total:</strong> ₹{order.discountedTotal}</p>
            )}
            <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;
