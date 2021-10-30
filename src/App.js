import './App.css';
import Nav from "./components/Nav";
import React, { Component }  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MouseParticles from 'react-mouse-particles'

function App() {
  return (
    <>
    <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
    <Router>
        <header>
            <Nav/>
        </header>
    </Router>
</>
  );
}

export default App;
