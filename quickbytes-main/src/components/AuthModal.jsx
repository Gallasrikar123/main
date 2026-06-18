import { X } from 'lucide-react';
import Logo from './Logo.jsx';

export default function AuthModal({ type, onClose }) {
  const isLogin = type === 'login';

  return (
    <div className="modal-backdrop">
      <form className="auth-modal">
        <button type="button" className="close-btn" onClick={onClose}><X size={18} /></button>
        <Logo />
        <h2>{isLogin ? 'Welcome back' : 'Create account'}</h2>
        {!isLogin && <input placeholder="Full name" />}
        <input placeholder="Email address" type="email" />
        <input placeholder="Password" type="password" />
        <button type="button" className="checkout-btn">{isLogin ? 'Login' : 'Register'}</button>
      </form>
    </div>
  );
}