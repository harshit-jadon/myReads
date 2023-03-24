import './App.css';
import Dashboard from './dashboard/Dashboard';
import SearchPage from './searchPage/SearchPage';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/search" element={ <SearchPage/> }/>
      </Routes>
    </div>
  );
}

export default App;
