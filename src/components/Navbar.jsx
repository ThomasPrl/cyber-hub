import React, { useState } from 'react'
import { Link } from 'react-router-dom';

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
            icon:<HomeIcon/>,
            path:"/"
        },
        {
            text:"6G",
            icon:<MenuBookIcon/>,
            path:"/6g"
        },
        {
            text:"Conferences",
            icon:<CampaignIcon/>,
            path:"/conferences"
        },
        {
            text:"Certificates",
            icon:<MenuBookIcon/>,
            path:"/certifications"
        },
        {
            text:"About",
            icon:<InfoIcon/>,
            path:"/about"
        },
        {
            text:"Account",
            icon:<AccountCircleIcon/>,
            path:"/profile/:id"
        },
    ];


  return (
    <nav>
    <div className="navbar-logo-container">
        <img src={LogoGradient} alt="logo"/>
    </div>
    <div className="navbar-links-container">

        <Link to="/">Home</Link>
        <Link to="/6g">6G</Link>
        <Link to="/conferences">Conferences</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/about">About</Link>
        {/* <a><Link to="/profile/:id">
            <AccountCircleIcon />
        </Link></a> */}
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
                            <Link to={item.path}>
                                <ListItemText primary={item.text}/>
                            </Link>    
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




