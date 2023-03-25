import { Link } from "react-router-dom";
import "./Dashboard.css";
import Header from "../header/Header";
import * as BookApi from "../BookApi";
import { useEffect, useState } from "react";

const Dashboard = (props) => {
  const [allBooks, setAllBooks] = useState([]);

  const getAllBooks = () => {
    const getBooks = async () => {
      const resp = await BookApi.getAll();
      console.log("resp >>", resp);
      setAllBooks(resp);
    };
    getBooks();
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div>
          <h2 className="heading-border">Currently Reading</h2>
          <div className="book-main-section">
          {allBooks
            .filter((ele) => ele.shelf === "currentlyReading")
            .map((element) => (
              <div className="book-section" key={element.id}>
                <div className="book-section-main">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${element.imageLinks.thumbnail})`,
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="none" disabled>
                        Move to..{" "}
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none"> None</option>
                    </select>
                  </div>
                </div>
                <div className="book-name">{element.title}</div>
                <div className="author-name">{element.authors[0]}</div>
              </div>
            ))}
            </div>
        </div>

        <div>
          <h2 className="heading-border">Want to Read</h2>
          <div className="book-main-section">
          {allBooks
            .filter((ele) => ele.shelf === "wantToRead")
            .map((element) => (
              <div className="book-section" key={element.id}>
                <div className="book-section-main">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${element.imageLinks.thumbnail})`,
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="none" disabled>
                        Move to..{" "}
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none"> None</option>
                    </select>
                  </div>
                </div>
                <div className="book-name">{element.title}</div>
                <div className="author-name">{element.authors[0]}</div>
              </div>
            ))}
            </div>
        </div>

        <div>
          <h2 className="heading-border">Read</h2>
          <div className="book-main-section">
          {allBooks
            .filter((ele) => ele.shelf === "read")
            .map((element) => (
              <div className="book-section" key={element.id}>
                <div className="book-section-main">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${element.imageLinks.thumbnail})`,
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="none" disabled>
                        Move to..{" "}
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none"> None</option>
                    </select>
                  </div>
                </div>
                <div className="book-name">{element.title}</div>
                <div className="author-name">{element.authors[0]}</div>
              </div>
            ))}
            </div>
        </div>


      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Dashboard;
