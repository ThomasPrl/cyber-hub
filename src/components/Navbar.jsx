import React, { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';

import Home from "./Home"
import Conferences from './Conferences';

import Logo from "../assets/CyberHub_black.svg"
import LogoGradient from "../assets/CyberHub_gradient.png";

import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CampaignIcon from '@mui/icons-material/Campaign';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';


function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"Conferences",
            icon:<CampaignIcon/>
        },
        {
            text:"Certificates",
            icon:<MenuBookIcon/>
        },
        {
            text:"About",
            icon:<InfoIcon/>
        },
        {
            text:"Account",
            icon:<AccountCircleIcon/>
        },
    ];


  return (
    <nav>
        <div className="navbar-logo-container">
            <img src={LogoGradient} alt="logo"/>
        </div>
        <div className="navbar-links-container">

            <a><Link to="/">Home</Link></a>
            <a><Link to="/conferences">Conferences</Link></a>
            <a><Link to="/certifications">Certifications</Link></a>
            <a><Link to="/about">About</Link></a>
            <a><Link to="/profile/:id">
                <AccountCircleIcon />
            </Link></a>
            {/* <a href="">Certificates</a>
            <a href="">About</a>
            <a href="">
                <AccountCircleIcon />     
            </a> */}
        </div>

        {/* RESPONSIVE BURGER MENU */}
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
            <Box
            sx={{width: 250}}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
            >
                <List>
                    {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>



    </nav>
  )
}

export default Navbar