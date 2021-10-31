import './App.css';
import Nav from "./components/nav/Nav";
import Projet from "./components/projet/Projet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MouseParticles from 'react-mouse-particles'

function App() {
  return (
    <>
    
    <Router>
    <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
        <header>
            <Nav/>
        </header>
        <Switch>
        <Route path="/projet">
            <Projet />
          </Route>
        </Switch>
    </Router>
</>
  );
}

export default App;
