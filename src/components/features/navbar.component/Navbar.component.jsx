import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";
import knifes from '.'

const Navbar = () => {
  return (
    <>
     <nav>
      <a href="#">
      <i class="fab fa-twitter">
      <img src="../imgs/knifes.jpg" width="65" height="60" className='logo' ></img>
      </i>
      </a>
        <Link to="Login" className='links' >Login</Link>
        <Link to="/" className='links' >Home</Link>
        <Link to="/User" className='links' >Profile</Link>
        <Link to="/Recipes" className='links' >
        <div class="dropdown">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">
        <Link to="Recipes" className='Links'>Recipes</Link>
        </a>
      <a href="#">
      <Link to="/restaurants" className='Links'>Restaurants</Link>
        </a>
      <a href="#">
      <Link to="/Chefs" className='Links'>Chefs</Link>
        </a>
    </div>
  </div>
        </Link>
        <Link to="/ContectUs" className='links' >ContectUs</Link>
     </nav>
    </>
  )
}

export default Navbar

