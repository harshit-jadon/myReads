import { useEffect, useState } from "react";
import "./SearchPage.css";
import * as BookApi from "../BookApi";
import Book from "../book/Book";
import BackNavigation from "../backNavigation/BackNavigation";

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
      <BackNavigation
        handleSearchValue={handleSearchValue}
        searchValue={searchValue}
      />
      <ol className="books-grid">
        <div className="book-flex">
          {searchValue ? (
            <Book filterShelf={searchResp} getAllBooks={props.getAllBooks} />
          ) : (
            <div>
              <h3 className="no-book">Please search book</h3>
            </div>
          )}
        </div>
      </ol>
      {noResult && (
        <div>
          <h3 className="no-book"> No book available</h3>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
