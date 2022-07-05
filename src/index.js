import ReactDOM from 'react-dom/client';

import Header from './Header';
import books from './books';
import Book from './Book';
// CSS
import './index.css';

const headerRoot = ReactDOM.createRoot(document.getElementById('header'));

const root = ReactDOM.createRoot(document.getElementById('root'));
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </section>
  );
}

headerRoot.render(<Header />);
root.render(<BookList />);
