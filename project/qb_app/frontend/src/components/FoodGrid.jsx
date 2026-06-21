import { ShoppingCart } from 'lucide-react';
import { euro } from '../data/menuItems.js';

export default function FoodGrid({ items, mode, addToCart }) {
  return (
    <section className="food-grid" aria-live="polite">
      {items.map((item, index) => (
        <article className="food-card" key={item.id} style={{ animationDelay: `${Math.min(index * 45, 450)}ms` }}>
          <img loading="lazy" src={item.image} alt={item.name} />
          <div className="card-body">
            <div>
              <span className="pill">{item.category}</span>
              <h3>{item.name}</h3>
            </div>
            <div className="rating-price">
              <span>Star {item.rating}</span>
              <strong>{euro.format(item.price)}</strong>
            </div>
            {mode === 'delivery' && <button className="add-btn" onClick={() => addToCart(item)}><ShoppingCart size={18} /> Add to cart</button>}
          </div>
        </article>
      ))}
      {items.length === 0 && <p className="empty-state">No items found. Try another search.</p>}
    </section>
  );
}