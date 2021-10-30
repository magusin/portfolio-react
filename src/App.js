import './App.css';
import Nav from "./components/Nav";
import React, { Component }  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <header>
            <Nav/>
        </header>
    </Router>
</>
  );
}

export default App;
