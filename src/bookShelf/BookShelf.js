import BookShelfOptions from "../bookShelfOptions/BookShelfOptions";
import "./BookShelf.css";
import Book from "../book/Book";

const BookShelf = (props) => {
  const filterShelf = props.allBooks.filter(
    (book) => book.shelf === props.bookShelf
  );

  return (
    <div>
      <h2 className="heading-border">{props.type}</h2>
      {filterShelf.length > 0 ? (
        <Book filterShelf={filterShelf} getAllBooks={props.getAllBooks} />
      ) : (
        <div>
          <h3 className="no-book">No Book Available</h3>
        </div>
      )}
    </div>
  );
};
export default BookShelf;
