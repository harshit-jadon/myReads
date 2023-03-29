import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import * as BookApi from "../BookApi";
import BookShelfOptions from "../bookShelfOptions/BookShelfOptions";

const SearchPage = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResp, setSearchResp] = useState([]);
  const [noResult, setNoresult] = useState(false);

  const handleSearchValue = (e) => {
    const searchVal = e.target.value;
    setSearchValue(searchVal);
  };

  const searchBooks = (bookName, num) => {
    const searchApi = async () => {
      const resp = await BookApi.search(bookName, num);
      if (resp.length) {
        setSearchResp(resp);
        setNoresult(false);
      } else {
        setSearchResp([]);
        setNoresult(true);
      }
    };
    searchApi();
  };

  useEffect(() => {
    if (searchValue.length > 0) {
      const num = 100;
      searchBooks(searchValue, num);
    } else {
      setNoresult(false);
    }
  }, [searchValue]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleSearchValue}
            value={searchValue}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          <div className="book-flex">
            {searchValue ? (
              searchResp.map((book) => {
                console.log("book >>",book)
                return (
                  <div className="book-main-section" key={book.id}>
                    <div className="book-section">
                      <div className="book-section-main">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book?.imageLinks?.thumbnail})`,
                          }}
                        ></div>
                        <BookShelfOptions getAllBooks={props.getAllBooks} book={book}
                        />
                      </div>
                      <div className="book-name">{book.title}</div>
                      <div className="author-name">
                        {book.authors !== undefined ? book.authors[0] : ""}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <h3 className="no-book">Please search book</h3>
              </div>
            )}
          </div>
        </ol>
      </div>
      {noResult && (
        <div>
          <h3 className="no-book"> No book available</h3>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
