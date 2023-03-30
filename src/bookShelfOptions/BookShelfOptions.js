import "./BookShelfOptions.css";
import * as BookApi from "../BookApi";
import { PropTypes } from "prop-types";

const BookShelfOptions = (props) => {

  const updateShelf = (selectedBook, selectedShelf)=>{
    const callUpdateApi = async()=>{
      await BookApi.update(selectedBook, selectedShelf);
        props.getAllBooks()
     }
    callUpdateApi();
   }

  const updateBookShelfOptions = (e)=>{
    const selectedBook = props.book;
    const selectedShelf = e.target.value;
    updateShelf(selectedBook,selectedShelf);
  }

  return (
    <div className="book-shelf-changer">
      <select id="choiceType" onChange={updateBookShelfOptions} value={props.shelfValue !== undefined ? props.shelfValue : "none" }>
        <option value="moveTo" disabled>
          Move to..
        </option>
        <option value="currentlyReading">
          Currently Reading
        </option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none"> None</option>
      </select>
    </div>
  );
};

export default BookShelfOptions;

BookShelfOptions.propTypes = {
  getAllBooks: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
};