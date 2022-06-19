import React from 'react'
import './Header.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  return (
    <div className = 'header'>
    <div className='header-logo'>
        <h1 className='logo-text'>Ship Cart</h1>
        <ShoppingCartIcon className="logo-icon"></ShoppingCartIcon>
    </div>

        <div className = 'header-Search'>
        <input className='header-Search-input' type='text' placeholder='Search'><SearchIcon className='header-searchicon'/></input>

        </div>

        <div className = 'header-nav'>
        <div className = 'header-options'>
            <span className = 'header-optionLineOne'> Welcome </span>
            <span className = 'header-optionLineTwo'> Sign In </span>
        </div>
        <div className = 'header-options'>
            <span className = 'header-optionLineOne'> Return </span>
            <span className = 'header-optionLineTwo'> & Orders </span>
        </div>
        <div className = 'header-options'>
            <span className = 'header-optionLineOne'> Your </span>
            <span className = 'header-optionLineTwo'> Prime </span>
        </div>
        
        </div>

    </div>
  )
}

export default Header