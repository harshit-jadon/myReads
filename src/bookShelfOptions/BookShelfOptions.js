import "./BookShelfOptions.css";

const BookShelfOptions = () => {
  //   const chooseChoiceType = () => {
  //     const value = document.getElementById("choiceType").value;
  //     switch (value) {
  //       case "currentlyReading":
  //         console.log("value 1>>>", value);
  //         break;

  //       case "wantToRead":
  //         console.log("value 3>>>", value);
  //         // setWantRead();
  //         break;

  //       case "read":
  //         console.log("value 2>>>", value);
  //         break;

  //       default:
  //     }
  //   };

  return (
    <div className="book-shelf-changer">
      <select id="choiceType">
        <option value="none" disabled>
          Move to..
        </option>
        <option value="currentlyReading" selected>
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
