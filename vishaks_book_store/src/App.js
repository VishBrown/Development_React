import React from 'react';
import './App.css';
import BookList from './BookList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vishak's Book Store</h1>
      </header>
      <main>
        <BookList />
      </main>
    </div>
  );
}

export default App;
