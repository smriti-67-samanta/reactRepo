import React from "react";

export default function SnackShelf() {
const Snack=[ {"id": "snk_001",
  "title": "Dark Chocolate Almonds",
  "category": "Sweet",
  "price": 5.99,
  "rating": 4.7,
  "createdAt": 1717020000000}]
  
  return (
            
    <div style={styles.shelf}>
      <h2 style={styles.title}>Snack Shelf</h2>
      <div style={styles.container}>
        {snacks.map((snack) => (
          <div key={snack.id} style={styles.card}>
            <h3 style={styles.snackName}>{snack.name}</h3>
            <p style={styles.flavor}>Flavor: {snack.flavor}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

  const styles = {
  shelf: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '30px',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
    ':hover': {
      transform: 'translateY(-5px)',
    },
  },
  snackName: {
    color: '#e74c3c',
  marginTop: '0',
    marginBottom: '10px',
  },
  flavor: {
    color: '#7f8c8d',
    margin: '5px 0',
  },
  rating: {
    color: '#f39c12',
    fontSize: '1.2em',
    marginTop: '10px',
  },
  ratingText: {
    fontSize: '0.8em',
    color: '#95a5a6',
    marginLeft: '5px',
  },
};
