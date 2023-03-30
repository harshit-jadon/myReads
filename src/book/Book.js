import "./Book.css";
import BookShelfOptions from "../bookShelfOptions/BookShelfOptions";
import { PropTypes } from "prop-types";

const Book = (props) => {
  return (
    <div className="book-main-section">
      {props.filterShelf.map((ele) => (
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
          <div className="author-name">
            {ele.authors !== undefined ? ele && ele.authors && ele.authors.join(", ") : ""}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Book;

Book.propTypes = {
  filterShelf: PropTypes.array.isRequired,
  getAllBooks: PropTypes.func.isRequired,
};