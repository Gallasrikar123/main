import { LogIn, Search, UserPlus } from 'lucide-react';
import Logo from './Logo.jsx';

export default function Navbar({ query, setQuery, setAuthView }) {
  return (
    <header className="topbar">
      <Logo />
      <label className="search-box">
        <Search size={18} />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search burgers, pizzas, drinks..." />
      </label>
      <div className="auth-actions">
        <button className="ghost-btn" onClick={() => setAuthView('login')}><LogIn size={18} /> Login</button>
        <button className="solid-btn" onClick={() => setAuthView('register')}><UserPlus size={18} /> Register</button>
      </div>
    </header>
  );
}