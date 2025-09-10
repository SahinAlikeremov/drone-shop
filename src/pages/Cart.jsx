import React from 'react';
import '../Styles/Cart.css';

function Cart(props) {
    const cart = Array.isArray(props.cart) ? props.cart : [];
    const incQty = typeof props.incQty === 'function' ? props.incQty : () => { };
    const decQty = typeof props.decQty === 'function' ? props.decQty : () => { };
    const removeFromCart = typeof props.removeFromCart === 'function' ? props.removeFromCart : () => { };
      const clearCart = typeof props.clearCart === 'function' ? props.clearCart : () => {}; // ✅ ekledik


    const total = cart.reduce(
        (acc, item) => acc + (item.price || 0) * (item.quantity ?? 1),
        0
    );

    function handleOrder() {
        alert("✅ Your order has been placed successfully!\n\nThank you for shopping with us. We will process it shortly.");
         clearCart();
    }

    return (
        <div className="cart-main">
            <h1 className='cart-header'>Cart</h1>
            <hr />
            {cart.length === 0 ? (
                <p className='empty-cart'>Your cart is empty.</p>
            ) : (
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Quantity</th>
                            <th>Name</th>
                            <th>Unit ($)</th>
                            <th>Subtotal ($)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <button className='decBtn' onClick={() => decQty(item.name)}>-</button>
                                    <span style={{ margin: '0 8px' }}>{item.quantity ?? 1}</span>
                                    <button className='incBtn' onClick={() => incQty(item.name)}>+</button>
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>${(item.price || 0) * (item.quantity ?? 1)}</td>
                                <td>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.name)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr className="cart-total">
                            <td colSpan="3"><b>Total</b></td>
                            <td colSpan="2"><b>${total}</b></td>
                        </tr>

                        <tr>
                            <td colSpan="5"><button onClick={handleOrder} className='orderBtn'>Order</button></td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Cart;
