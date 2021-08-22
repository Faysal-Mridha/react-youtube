import React, { useState } from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const manuShow=()=>{
    document.querySelector('.sidebar').classList.add("show_sidebar");
}
const manuHide=()=>{
    document.querySelector(".sidebar").classList.remove("show_sidebar");
}

const Header = () => {
    const [inputValue, setInputValue] =useState('');

const changeHandler=(e)=>{
setInputValue(e.target.value);
}

    return (<div className="main_header">
          <Helmet>
        <title>My You-tube clone || I am create this</title>
      </Helmet>
        <div className="container">
            <div className="header">
             <div className="header__left">
                <MenuIcon className="header__manuBar" style={{cursor:"pointer"}} onDoubleClick={manuHide} onClick={manuShow}/>
                <Link to="/"><img className="header__logo" src="/images/logo.svg" /></Link>
             </div>

             <div className="header__input">
                 <input onChange={changeHandler} type="text" placeholder="Search" />
                 <Link to={`/search/${inputValue}`}><button className="search-btn"><SearchIcon/></button></Link>
             </div>
             <div className="header__icons">
                    <VideoCallIcon className="header__icon" />
                    <AppsIcon className="header__icon" />
                    <NotificationsActiveIcon className="header__icon" />
                    <Avatar className="header__icon" src="/images/avatar.jpg" alt="Fm"/>
             </div>
            </div>
        </div>
        </div>
    );
};

export default Header;