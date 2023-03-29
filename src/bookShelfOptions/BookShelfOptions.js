import "./BookShelfOptions.css";
import * as BookApi from "../BookApi";

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
      <select id="choiceType" onChange={updateBookShelfOptions} value={props.book.shelf ? props.book.shelf : "none"}>
        <option value="none" disabled>
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
