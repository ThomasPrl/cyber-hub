import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// import Logo from "../assets/CyberHub_black.svg"
import LogoGradient from "../assets/CyberHub_gradient.png";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

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


// const Navbar = () => {
//     const [active, setActive] = useState("Home");
//     const [toggle, setToggle] = useState(false);
//     const menuOptions = [
//         {
//             title:"Home",
//             icon:<HomeIcon/>,
//             id:"/"
//         },
//         {
//             title:"Conferences",
//             icon:<CampaignIcon/>,
//             id:"conferences"
//         },
//         {
//             title:"Certificates",
//             icon:<MenuBookIcon/>,
//             id:"certifications"
//         },
//         {
//             title:"About",
//             icon:<InfoIcon/>,
//             id:"about"
//         },
//         // {
//         //     title:"Account",
//         //     icon:<AccountCircleIcon/>,
//         //     id:"account"
//         // },
//     ];
  
//     return (
//       <nav className="w-full flex py-6 justify-between items-center navbar">
//         <img src={LogoGradient} alt="hoobank" className="w-40" />
  
//         <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//           {menuOptions.map((nav, index) => (
//             <li
//               key={nav.id}
//               className={`font-poppins font-normal cursor-pointer text-[16px] ${
//                 active === nav.title ? "text-black" : "text-dimBlack"
//               } ${index === menuOptions.length - 1 ? "mr-0" : "mr-10"}`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>
  
//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <img
//             src={toggle ? close : menu}
//             alt="menu"
//             className="w-[28px] h-[28px] object-contain"
//             onClick={() => setToggle(!toggle)}
//           />
  
//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 rounded-xl sidebar`}
//           >
//             <ul className="list-none flex justify-end items-start flex-1 flex-col">
//               {menuOptions.map((nav, index) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-dimWhite"
//                   } ${index === menuOptions.length - 1 ? "mb-0" : "mb-4"}`}
//                   onClick={() => setActive(nav.title)}
//                 >
//                   <a href={`${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   };
function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>,
            path:"/"
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




