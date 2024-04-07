import React, { useState } from 'react';
import Book from './Book';
import booksData from './books.json'; 
import Cart from './Cart';

function BookList() {
  const [books, setBooks] = useState(booksData);
  const [filterGenre, setFilterGenre] = useState('All');
  const [filterPrice, setFilterPrice] = useState('All');
  const [cartItems, setCartItems] = useState([]);

  const sortBooksByPriceDesc = () => {
    const sortedBooks = [...books].sort((a, b) => b.price - a.price);
    setBooks(sortedBooks);
  };

  const sortBooksByPriceAsc = () => {
    const sortedBooks = [...books].sort((a, b) => a.price - b.price);
    setBooks(sortedBooks);
  };

  const addToCart = (book) => {
    setCartItems(prevItems => [...prevItems, book]);
  };

  const resetBooksAndCart = () => {
    setBooks(booksData);
    setCartItems([]); 
    setFilterGenre('All'); 
    setFilterPrice('All'); 
  };

  const filteredBooks = books.filter(book => {
    if (filterGenre !== 'All' && filterGenre !== (book.genre === 'Fiction' ? 'Fiction' : 'Others')) return false;
    if (filterPrice === '<$20' && book.price >= 20) return false;
    if (filterPrice === '>$20' && book.price <= 20) return false;
    return true;
  });

  return (
    <div>
      <div className="controls">
        <button onClick={sortBooksByPriceDesc}>Sort by Price Descending</button>
        <button onClick={sortBooksByPriceAsc}>Sort by Price Ascending</button>
        <button onClick={resetBooksAndCart}>Reset</button> 
        <label>
          Genre:
          <select value={filterGenre} onChange={(e) => setFilterGenre(e.target.value)}>
            <option value="All">All</option>
            <option value="Fiction">Fiction</option>
            <option value="Others">Others</option>
          </select>
        </label>
        <label>
          Price Range:
          <select value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)}>
            <option value="All">All</option>
            <option value="<$20">Less than $20</option>
            <option value=">$20">More than $20</option>
          </select>
        </label>
      </div>
      
      <div className="content">
        <div className="book-list">
          {filteredBooks.map((book) => (
            <Book key={book.id} book={book} onAddToCart={addToCart} />
          ))}
        </div>
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default BookList;
