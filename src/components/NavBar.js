import React from 'react'

class NavBar extends React.Component {
   render() {
      return (
        <nav>
           <div className="nav-wrapper">
           <ul>
             <li><a href="/home">Home</a></li>{" "}
             <li><a href="/about">About</a></li>
             <li><a href="/contact">Contact</a></li>
           </ul>
           </div>
         </nav>
      )
   }
}
export default NavBar;
