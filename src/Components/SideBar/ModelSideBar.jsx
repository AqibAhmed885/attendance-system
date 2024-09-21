import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { FaBars } from "react-icons/fa";
import Sidebar from "./SideBar";
// import { Menu as MenuIcon } from '@mui/icons-material';

const ModelSideBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <div>
      <button
        onClick={toggleDrawer(true)}
        className="flex items-center justify-center py-4"
      >
        <FaBars />
      </button>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{ width: 250 }}
        >
          <Sidebar />
        </div>
      </Drawer>
    </div>
  );
};

export default ModelSideBar;
