export default function Logo() {
  return (
    <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="QuickBytes home">
      <span className="logo-badge"><span>Q</span><span>B</span></span>
      <strong>QuickBytes</strong>
    </button>
  );
}