import React from "react";
import './nav.css'
function Nav() {

  return (
    <>
  
       <div class="nav">
         <div>
         <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>  
          <li>Products</li>
         </ul>
      </div>
        <div class="search">
          <input type="text" placeholder="Search..." />
        </div> 
      </div>


    </>
    
  )
}

export default Nav
