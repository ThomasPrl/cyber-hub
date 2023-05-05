import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Heading } from './TableOfContents';

import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

type Props = {
  headings: Heading[];
};

const TableOfContentsMobile = ({headings}: Props) => {
  
  const [openMenu, setOpenMenu] = useState(false);
  
  return (
    <><div className="">
      <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div><Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="bottom">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {headings.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <Link to={`#${item.id}`}>
                    <ListItemText primary={item.text} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer></>
  )
}

export default TableOfContentsMobile