import BookShelfOptions from "../bookShelfOptions/BookShelfOptions";
import "./BookShelf.css";

const BookShelf = (props) => {
  const filterShelf = props.allBooks.filter(
    (book) => book.shelf === props.bookShelf
  );

  return (
    <div>
      <h2 className="heading-border">{props.type}</h2>
      {filterShelf.length > 0 ? (
        <div className="book-main-section">
          {filterShelf.map((ele) => (
            <div className="book-section" key={ele.id}>
              <div className="book-section-main">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${ele?.imageLinks?.thumbnail})`,
                  }}
                ></div>
                <BookShelfOptions
                  book={ele}
                  getAllBooks={props.getAllBooks}
                  shelfValue={ele.shelf}
                />
              </div>
              <div className="book-name">{ele.title}</div>
              <div className="author-name">{ele.authors !== undefined ? ele.authors[0] : ""}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h3 className="no-book">No Book Available</h3>
        </div>
      )}
    </div>
  );
};
export default BookShelf;
