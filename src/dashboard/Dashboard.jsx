import { Link } from "react-router-dom";
import "./Dashboard.css";
import Header from "../header/Header";
import * as BookApi from "../BookApi"

const Dashboard = (props) => {


  return (
    <div>
      <Header />
      <div>
        <div>
          <h2 className="heading-border">Currently Reading</h2>
          <div className="book-section">
            <div>
              <div className="book-section-main">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                      'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>Move to.. </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none"> None</option>
                  </select>
                </div>
              </div>
              <div className="book-name">Commerce Book</div>
              <div className="author-name">Tanisha jadon</div>
            </div>

            <div>
              <div className="book-section-main">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                      'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>Move to.. </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none"> None</option>
                  </select>
                </div>
              </div>
              <div className="book-name">Commerce Book</div>
              <div className="author-name">Tanisha jadon</div>
            </div>

            <div>
              <div className="book-section-main">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                      'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>Move to.. </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none"> None</option>
                  </select>
                </div>
              </div>
              <div className="book-name">Commerce Book</div>
              <div className="author-name">Tanisha jadon</div>
            </div>

            <div>
              <div className="book-section-main">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                      'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>Move to.. </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none"> None</option>
                  </select>
                </div>
              </div>
              <div className="book-name">Commerce Book</div>
              <div className="author-name">Tanisha jadon</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="heading-border">Want to Read</h2>
          <div className="book-section">
            <div>
              <div className="book-section-main">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                      'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>Move to.. </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none"> None</option>
                  </select>
                </div>
              </div>
              <div className="book-name">Commerce Book</div>
              <div className="author-name">Tanisha jadon</div>
            </div>
            <div>
              <div className="book-section-main">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                      'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>Move to.. </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none"> None</option>
                  </select>
                </div>
              </div>
              <div className="book-name">Commerce Book</div>
              <div className="author-name">Tanisha jadon</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="heading-border">Read</h2>
          <div className="book-section">
            <div>
              <div className="book-section-main">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                      'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                  }}
                ></div>
               <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>Move to.. </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none"> None</option>
                  </select>
                </div>
              </div>
              <div className="book-name">Commerce Book</div>
              <div className="author-name">Tanisha jadon</div>
            </div>
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
