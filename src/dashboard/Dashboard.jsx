import Header from "../header/Header";
import Bookshelf from "../bookShelf/BookShelf";
import AddBook from "../addBook/AddBook";
import { PropTypes } from "prop-types";

const Dashboard = (props) => {
  return (
    <div>
      <Header />
      <div>
        <Bookshelf
          allBooks={props.allBooks}
          type="Currently Reading"
          bookShelf="currentlyReading"
          getAllBooks={props.getAllBooks}
        ></Bookshelf>
        <Bookshelf
          allBooks={props.allBooks}
          type="Want to Read"
          bookShelf="wantToRead"
          getAllBooks={props.getAllBooks}
        ></Bookshelf>
        <Bookshelf
          allBooks={props.allBooks}
          type="Read"
          bookShelf="read"
          getAllBooks={props.getAllBooks}
        ></Bookshelf>
      </div>
      <AddBook />
    </div>
  );
};

export default Dashboard;

Dashboard.propTypes = {
  allBooks: PropTypes.array.isRequired,
  getAllBooks: PropTypes.func.isRequired,
};