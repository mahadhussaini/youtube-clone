import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Navbar.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setSearchTerm(searchQuery);
  };

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar className="navbar">
        <IconButton
          size="large"
          color="inherit"
          edge="start"
          aria-label="menu"
          onClick={handleLogoClick}
        >
          <YouTubeIcon sx={{ color: "red" }} />
          <Box sx={{ flexGrow: 0, marginRight: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            YouTube
          </Typography>
        </IconButton>
        <div className="search">
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            classes={{ root: "inputRoot", input: "inputInput" }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
