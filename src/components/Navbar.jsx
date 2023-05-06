import React from "react";
import {FaSearch,} from "react-icons/fa"
import {MdLanguage,MdFullscreenExit,MdOutlineChatBubbleOutline,MdList} from "react-icons/md"
import {IoMdNotifications} from "react-icons/io"
import  Profile from '../../src/profile.jpg'
import { DarkModeContext } from '../components/../context/darkModeContext';
import { useContext } from 'react';
// import LightModeIcon from '@mui/icons-material/LightMode';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Navbar = () => {
    // const [theme, Settheme] = useState('MdOutlineDarkMode')
    const { dispatch } = useContext(DarkModeContext);
  return (
   <div className="navbar">
    <div className="wrapper">
        <div className="search">
            <input type="text" placeholder="Serach..."/>
            <FaSearch/>
        </div>
        <div className="items">
            <div className="item">
            <MdLanguage className="navicon"/>
            English
            </div>

            <div className="item" onClick={()=>dispatch({type:"TOGGLE"})
            }>
            <Switch {...label}   className="navicon"/>
           
            </div>
            <div className="item">
            <MdFullscreenExit className="navicon"/>
           
            </div>
            <div className="item">
            <IoMdNotifications className="navicon" />
            <div className="counter" >4</div>
          
            </div>
            <div className="item">
            <MdOutlineChatBubbleOutline className="navicon"/>
            <div className="counter">5</div>
           
            </div>
            <div className="item">
            <MdList className="navicon"/>
          
            </div>

            <div className="item">
            <img src={Profile} alt="User profile" className="avatar" />
          
            </div>
        </div>
    </div>
   </div>
  )
};

export default Navbar;
