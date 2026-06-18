import { categories } from '../data/menuItems.js';

export default function CategoryTabs({ activeCategory, setActiveCategory }) {
  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button key={category} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}