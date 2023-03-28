import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./dashboard/Dashboard";
import SearchPage from "./searchPage/SearchPage";
import { useEffect, useState } from "react";
import * as BookApi from "../src/BookApi";

function App() {
  const [allBooks, setAllBooks] = useState([]);

  const getAllBooks = () => {
    const getBooks = async () => {
      const resp = await BookApi.getAll();
      setAllBooks(resp);
    };
    getBooks();
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard allBooks={allBooks} />}></Route>

        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
