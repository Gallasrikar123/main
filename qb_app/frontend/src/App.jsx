import { useMemo, useState } from 'react';
import AuthModal from './components/AuthModal.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import { menuItems } from './data/menuItems.js';
import MenuPage from './pages/MenuPage.jsx';
import WelcomePage from './pages/WelcomePage.jsx';

export default function App() {
  const [mode, setMode] = useState('welcome');
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([3, 8, 14]);
  const [authView, setAuthView] = useState(null);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
      const searchMatch = `${item.name} ${item.category}`.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, query]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const addToCart = (item) => setCart((items) => [...items, item]);
  const removeFromCart = (index) => setCart((items) => items.filter((_, i) => i !== index));
  const toggleSeat = (seat) => {
    setBookedSeats((seats) =>
      seats.includes(seat) ? seats.filter((s) => s !== seat) : [...seats, seat]
    );
  };

  return (
    <div className="app-shell">
      <Sidebar setMode={setMode} />

      <main className="main-panel">
        <Navbar query={query} setQuery={setQuery} setAuthView={setAuthView} />

        {mode === 'welcome' ? (
          <WelcomePage setMode={setMode} />
        ) : (
          <MenuPage
            mode={mode}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            filteredItems={filteredItems}
            addToCart={addToCart}
            cart={cart}
            total={total}
            removeFromCart={removeFromCart}
            bookedSeats={bookedSeats}
            toggleSeat={toggleSeat}
          />
        )}

        <Footer />
      </main>

      {authView && <AuthModal type={authView} onClose={() => setAuthView(null)} />}
    </div>
  );
}