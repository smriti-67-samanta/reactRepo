function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <p>Rating: {product.rating}/5</p>
        <p className="category">{product.category}</p>
      </div>
    </div>
  );
}

export default ProductCard;