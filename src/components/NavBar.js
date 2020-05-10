import React from 'react'
import { Route, Link } from 'react-router-dom';
import Home from './Home'


class NavBar extends React.Component {
   render() {
      return (
      <div>
        <nav>
           <div className="nav-wrapper">
           <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/results">Results</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
           </ul>
           </div>
         </nav>
        </div>
      )
   }
}
export default NavBar;
