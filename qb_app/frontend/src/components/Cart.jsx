import { X } from 'lucide-react';
import { euro } from '../data/menuItems.js';

export default function Cart({ cart, total, removeFromCart }) {
  return (
    <section className="cart-card">
      <h2>Cart</h2>
      <div className="cart-list">
        {cart.length === 0 ? <p>Your delivery cart is empty.</p> : cart.map((item, index) => (
          <div className="cart-row" key={`${item.id}-${index}`}>
            <span>{item.name}</span>
            <strong>{euro.format(item.price)}</strong>
            <button onClick={() => removeFromCart(index)} aria-label={`Remove ${item.name}`}><X size={14} /></button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <span>Total</span>
        <strong>{euro.format(total)}</strong>
      </div>
      <button className="checkout-btn" disabled={!cart.length}>Checkout</button>
    </section>
  );
}