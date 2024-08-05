import React, { useState, useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (matches) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  }, [matches]);

  const handleDrawerToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box>
      {matches ? (
        <Drawer variant="permanent" anchor="left" className="sidebar">
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <WhatshotIcon />
              </ListItemIcon>
              <ListItemText primary="Trending" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SubscriptionsIcon />
              </ListItemIcon>
              <ListItemText primary="Subscriptions" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <VideoLibraryIcon />
              </ListItemIcon>
              <ListItemText primary="Library" />
            </ListItem>
          </List>
        </Drawer>
      ) : (
        <>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            anchor="left"
            open={isSidebarOpen}
            onClose={handleDrawerToggle}
          >
            <Box
              sx={{ display: "flex", justifyContent: "flex-start", padding: 1 }}
            >
              <IconButton onClick={handleDrawerToggle}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <WhatshotIcon />
                </ListItemIcon>
                <ListItemText primary="Trending" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SubscriptionsIcon />
                </ListItemIcon>
                <ListItemText primary="Subscriptions" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <VideoLibraryIcon />
                </ListItemIcon>
                <ListItemText primary="Library" />
              </ListItem>
            </List>
          </Drawer>
        </>
      )}
    </Box>
  );
};

export default Sidebar;
