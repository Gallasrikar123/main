import { Headphones, Info, Menu, Phone } from 'lucide-react';

export default function Sidebar({ setMode }) {
  const items = [
    { icon: Menu, label: 'Menu', action: () => setMode('delivery') },
    { icon: Info, label: 'Info', action: () => document.querySelector('#info')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: Phone, label: 'Contact', action: () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: Headphones, label: 'Care', action: () => alert('Customer Care: support@quickbytes.app') }
  ];

  return (
    <nav className="sidebar" aria-label="QuickBytes sidebar">
      {items.map(({ icon: Icon, label, action }) => (
        <button key={label} onClick={action} title={label} aria-label={label}><Icon size={22} /></button>
      ))}
    </nav>
  );
}