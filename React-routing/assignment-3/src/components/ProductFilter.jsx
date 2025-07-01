function ProductFilter({ onFilter, onSort, products }) {
  const categories = ['all', ...new Set(products.map(p => p.category))];

  return (
    <div className="product-filter">
      <div className="filter-section">
        <label htmlFor="category">Filter by Category:</label>
        <select 
          id="category" 
          onChange={(e) => onFilter(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
      
      <div className="sort-section">
        <label htmlFor="sort">Sort by Price:</label>
        <select 
          id="sort" 
          onChange={(e) => onSort(e.target.value)}
        >
          <option value="">Default</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default ProductFilter;