import Cart from '../components/Cart.jsx';
import CategoryTabs from '../components/CategoryTabs.jsx';
import FoodGrid from '../components/FoodGrid.jsx';
import Hero from '../components/Hero.jsx';
import SeatBooking from '../components/SeatBooking.jsx';

export default function MenuPage({
  mode,
  activeCategory,
  setActiveCategory,
  filteredItems,
  addToCart,
  cart,
  total,
  removeFromCart,
  bookedSeats,
  toggleSeat
}) {
  return (
    <div className="content-grid">
      <section className="menu-zone">
        <Hero mode={mode} />
        <CategoryTabs
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <FoodGrid items={filteredItems} mode={mode} addToCart={addToCart} />
      </section>

      <aside className="side-zone">
        {mode === 'delivery' ? (
          <Cart cart={cart} total={total} removeFromCart={removeFromCart} />
        ) : (
          <SeatBooking bookedSeats={bookedSeats} toggleSeat={toggleSeat} />
        )}
      </aside>
    </div>
  );
}