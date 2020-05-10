import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Results from './components/Results'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path ='/home' component={Home} />
        <Route path ='/about' component={About} />
        <Route path ='/contact' component={Contact} />
        <Route path ='/results' component={Results} />
      </div>
    </Router>
    );
}

export default App;
