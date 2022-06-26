import React, { Fragment } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route path='/' element={
      <Fragment>
        <Header/>
        <Home/>
      </Fragment>
    } /> 
        <Route path='/checkout' element={<Header />} />
    </Routes>
    </div>
  </Router>
  );
}

export default App;
