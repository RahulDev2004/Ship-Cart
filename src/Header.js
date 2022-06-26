import React from 'react'
import './Header.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className = 'header'>
    <Link style={{textDecoration: 'none'}} to='/'>
    <div className='header-logo'>
        <h1 className='logo-text'>Ship Cart</h1>
        <ShoppingCartIcon className="logo-icon"></ShoppingCartIcon>
    </div>
    </Link>

        <div className = 'header-Search'>
        <input className='header-Search-input' type='text' placeholder='Search'></input>
        <SearchIcon className='header-Search-icon'></SearchIcon>
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

        <Link style={{textDecoration: 'none'}} to='/checkout'>
        <div className='header-optionBasket'>
        <ShoppingBasketIcon />
        <span className='header-optionLineTwo header-optionBasket-count'>0</span>
        </div>
        </Link>
        </div>

    </div>
  )
}

export default Header