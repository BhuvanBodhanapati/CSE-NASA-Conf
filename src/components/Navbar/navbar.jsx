import * as React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/mitsLogo.jpeg";
import csi from "../../assets/csiLogo.png";
import { useState, useEffect } from "react";
import './navbar.css'
import { ApplicationConstant } from "../../constant/applicationConstant";
import { Link } from "react-router-dom";

const menuList = [
  {
    name: "Home",
    path: `${ApplicationConstant.HOME_PAGE_PATH}`,
    className: "navItems",
  },
  {
    name: "Committee",
    path: `${ApplicationConstant.COMMITE_PAGE_PATH}`,
    className: "navItems",
  },
  {
    name: "Important Dates",
    path: `${ApplicationConstant.IMPDATES_PAGE_PATH}`,
    className: "navItems",
  },
  {
    name: "Registration",
    path: `${ApplicationConstant.REGISTRATION_PAGE_PATH}`,
    className: "navItems",
  },
  {
    name: "Publication",
    path: `${ApplicationConstant.PUBLICATION_PAGE_PATH}`,
    className: "navItems",
  },
  {
    name: "Contact Us",
    path: `${ApplicationConstant.CONTACTUS_PAGE_PATH}`,
    className: "navItems",
  },
];

const NavBar = () => {

  useEffect(() => {
    handleNavItem();
  }, [])

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [menuItemsListOpen, setMenuItemsListOpen] = React.useState(false)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavItem = (props)=>{
     var sideMenu = document.querySelectorAll(".navItems");
     sideMenu.forEach((item,index) => {
       if (props == index){
          item.classList.add("active");
        }else{
          item.classList.remove("active");
        }
     });
  }

  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  function handleMenuItems (){
    document.getElementById("menuItemsList").classList.toggle("active");
    document.getElementById("navBarBody").classList.toggle("active");
    setMenuItemsListOpen(!menuItemsListOpen);
  }

  return (
    <div>
      <div className="navBarHeaderDiv">
        <div className="navBarHeader">
          <img className="titleLogo" src={logo}></img>
          <Typography className="navBarHeaderTitle">
            National Conference on Recent Advancements in Computing, Communication & Societal Applications, 2023 <br/>
            ( NASA' 23 )
          </Typography>
          <img src={csi} className="titleLogo"></img>
        </div>
      </div>

      <AppBar position="static" className="navBarBody" id="navBarBody">
        <Container maxWidth="xl">
            <div onClick={handleMenuItems} className="menuIconDiv">
              {menuItemsListOpen == false ? (
                <MenuIcon className="menuIcon" />
              ) : (
                <CancelIcon className="menuIcon" />
              )}
            </div>

            <Typography
              className="menuItemsList"
              textAlign="Right"
              id="menuItemsList"
            >
              {menuList.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className={item.className}
                  onClick={() => handleNavItem(index)}
                >
                  {item.name}
                </Link>
              ))}
            </Typography>
        </Container>
      </AppBar>
    </div>
  );
};
export default NavBar;
