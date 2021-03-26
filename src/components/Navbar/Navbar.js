import React, { useRef } from 'react';
import {  NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import logo from "../../images/logo.svg";



const searchGame = (e,history) => {

  if (e.target.value.length > 3) {
    history.push('/search/'+e.target.value);
  }
}

const Navbar = () => {
  const history = useHistory();
  const navbarLinks = useRef(null);
  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle('menu-collapse');
  };
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <a href="/" className='brand-title'><img  alt="logo"  className =" logo-w " src={logo} /> </a>
          <button onClick={(e) => { handleNavbarButton(e); }} className='navbar-toggler'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div ref={navbarLinks} className='navbar-links menu-collapse'>
            <ul className='links-list'>
              <li className='nav-item mt1'>
                <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/'> PAPULAR</NavLink>
              </li>
              <li className='nav-item mt1'>
                <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/recent'>MOST RECENT</NavLink>
              </li>
              <li className='nav-item'>

                <label>
                  <input onChange={(e) => {searchGame(e, history) }} type="text" placeholder="Find your game "/>
                </label>

              </li>
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
