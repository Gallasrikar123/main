import { useState } from 'react';
import { X } from 'lucide-react';
import Logo from './Logo.jsx';

const API_URL = 'http://localhost:5000/api';

export default function AuthModal({ type, onClose }) {
  const isLogin = type === 'login';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const endpoint = isLogin ? '/auth/login' : '/auth/register';
    const body = isLogin ? { email, password } : { name, email, password };

    try {
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error?.formErrors?.[0] || data.error || 'Something went wrong');
        setLoading(false);
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      onClose();
    } catch (err) {
      setError('Could not reach server. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    
  );
}
