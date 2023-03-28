import Header from "../header/Header";
import Bookshelf from "../bookShelf/BookShelf";
import AddBook from "../addBook/AddBook";

const Dashboard = (props) => {
  // const [currentRead, setCurrentRead] = useState([]);
  // const [wantRead, setWantRead] = useState([]);
  // const [read, setRead] = useState([]);

  // const getAllBooks = () => {
  //   const getBooks = async () => {
  //     const resp = await BookApi.getAll();

  //     // setAllBooks(resp);

  //     const filtCurrentRead = resp.filter(
  //       (ele) => ele.shelf === "currentlyReading"
  //     );
  //     setCurrentRead(filtCurrentRead);

  //     const filtwantRead = resp.filter((ele) => ele.shelf === "wantToRead");
  //     setWantRead(filtwantRead);

  //     const filtRead = resp.filter((ele) => ele.shelf === "read");
  //     setRead(filtRead);
  //   };
  //   getBooks();
  // };

  // const updateBooks = () => {
  //   const bookUpdate = async () => {
  //     const resp = await BookApi.update();
  //     console.log("update resp", resp);
  //   };
  //   bookUpdate();
  // };

  return (
    <div>
      <Header />
      <div>
        <Bookshelf
          allBooks={props.allBooks}
          type="Currently Reading"
          bookShelf="currentlyReading"
        ></Bookshelf>
        <Bookshelf allBooks={props.allBooks} type="Want to Read" bookShelf="wantToRead" ></Bookshelf>
        <Bookshelf allBooks={props.allBooks} type="Read" bookShelf="read"></Bookshelf>
      </div>
      <AddBook />
    </div>
  );
};

export default Dashboard;
