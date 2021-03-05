import React from 'react'
import './styles.css'
import netflixLogo from '../../images/netflix-logo.png'
import SearchIcon from '@material-ui/icons/Search'; 
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header(){
    return(
        <>
        <header id='header-container'>
    <a href='#'><img id='logo-netflix' src={netflixLogo} alt=''></img></a>

    <nav id='links'> 
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Series</li>
    </nav>

    <div id='div-search'>
    < SearchIcon id='search-icon' /> 
    < NotificationsIcon id='notification-icon' />
        <img src="https://avatars.githubusercontent.com/u/79036409?s=400&u=3507847840835e14ee774b12d7aeb7bd47e5a929&v=4" />
    </div>
    </header>
        </>
    )
}

export default Header