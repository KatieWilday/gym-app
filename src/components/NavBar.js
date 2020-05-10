import React from 'react'
import { Route, Link } from 'react-router-dom';


class NavBar extends React.Component {
   render() {
      return (
      <div>
        <nav>
           <div className="nav-wrapper">
           <div class="dropdown">
            <span>Menu</span>
            <ul className="dropdown-content">
              <li><a href="/home">Home</a></li>
              <li><a href="/results">Results</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
           </div>
           </div>
         </nav>
        </div>
      )
   }
}
export default NavBar;
