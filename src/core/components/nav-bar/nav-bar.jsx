import React from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.scss';
import LangSwitch from '../lang-switch/lang-switch';


const NavBar = () => (
  <div className='nav-bar-container'>
    <Link className='nav-bar-item' to='/'>Home</Link>
    <Link className='nav-bar-item' to='/movie'>Movies</Link>
    <Link className='nav-bar-item' to='/moviestore'>Movies With Store</Link>
    <Link className='nav-bar-item' to='/about'>About</Link>
    <div className='nav-bar-item-right'>
      <LangSwitch />
    </div>
  </div>
);


export default NavBar;
