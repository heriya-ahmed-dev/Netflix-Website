import React from 'react';
import './css/Header.css';
import NetflixLogo from './assets/download.jpg';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ContactsIcon from '@mui/icons-material/Contacts';

const Header = () => {
  return (
    <div className='ThirdHorizontal'>
        <div className='Horizontal'>
        
            <img src={NetflixLogo}/>
      <li>Home</li>
      <li>TVShows</li>
      <li>Movies</li>
      <li>Latest</li>
      <li>MyList</li>
      <li>Browse My Languages</li>
      <div className='Seclist'>
          <SearchIcon/>
           <NotificationsNoneIcon/>
           <ContactsIcon/>
           <ArrowDropDownIcon/>
      </div>

        </div>


    </div>



  )
}

export default Header;

