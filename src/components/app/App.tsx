import React from 'react';
import './App.css';
import Header from "../header/Header";
import {HashRouter} from "react-router-dom";
import RoutesOf from "../RoutesOf";

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Header />
            <RoutesOf/>
        </HashRouter>
    </div>
  );
}

export default App;
