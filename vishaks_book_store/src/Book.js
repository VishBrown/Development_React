import React from 'react';

function Book({ book, onAddToCart }) {
  return (
    <div className="book">
      <img src={book.image} alt={book.name} style={{ width: "100px", height: "150px" }} />
      <h2>{book.name}</h2>
      <p>Genre: {book.genre}</p>
      <p>Price: ${book.price}</p>
      <button onClick={() => onAddToCart(book)}>Add to Cart</button>
    </div>
  );
}

export default Book;
