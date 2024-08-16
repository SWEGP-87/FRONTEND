import React, { useState } from "react";
import { Badge, Drawer, IconButton, Button, Avatar } from "@material-ui/core";
import { Search, ShoppingCartOutlined, Menu, Close } from "@material-ui/icons";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Announcement from "./Announcement";
import Ediprofile from "../assets/Ediprofile.png";

const AnnouncementContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Container = styled.div`
  color: #caf0f8;
  height: 60px;
  display: flex;
  position: fixed;
  top: 30px; /* Adjusted to be below the announcement */
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #b669fd;
  background-size: 40px 40px;
  z-index: 999;
  background-image: radial-gradient(#173d49 85%, #36a6f1 90%, #0d1725 20%);
  background-size: 50px 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: -20px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 100px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuIconContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-right: 20px;
    background-image: radial-gradient(#173d49 85%, #36a6f1 90%, #0d1725 20%);
    background-size: 50px 50px;
    color: #caf0f8;
  }
`;

const buttonAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const AnimatedButton = styled(Button)`
  animation: ${buttonAnimation} 1s ease-in-out infinite;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;
  padding: 10px;
  color: #caf0f8;
`;

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true); // Simulating logged-in state
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/150"); // Placeholder profile pic

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <div
      style={{
        width: 250,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#caf0f8",
      }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <IconButton onClick={handleDrawerToggle} style={{ alignSelf: "flex-end" }}>
        <Close />
      </IconButton>
      <Link to="/"> <AnimatedButton>Home</AnimatedButton> </Link>
      <Link to="/cart"> <AnimatedButton> <Badge color="#caf0f8"> <ShoppingCartOutlined /> </Badge> </AnimatedButton> </Link>
      <Link to="/TrainingPage"> <AnimatedButton>Training</AnimatedButton> </Link>
      <Link to="/BlogPage"> <AnimatedButton>Blog</AnimatedButton> </Link> {/* New Link */}
      {loggedIn ? (
        <>
          <Link to="/profile"> <AnimatedButton>Profile</AnimatedButton> </Link>
          <Link to="/"> <AnimatedButton>Logout</AnimatedButton> </Link>
        </>
      ) : (
        <>
          <Link to="/login"> <AnimatedButton>LOGIN</AnimatedButton> </Link>
          <Link to="/register"> <AnimatedButton>REGISTER</AnimatedButton> </Link>
        </>
      )}
    </div>
  );

  return (
    <>
      <AnnouncementContainer>
        <Announcement />
      </AnnouncementContainer>
      <Container>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MANNALAND FARMS</Logo>
        </Center>
        <Right>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <AnimatedButton style={{ color: "#caf0f8" }}>Home</AnimatedButton>
          </Link>
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <AnimatedButton style={{ color: "#caf0f8" }}>
              <Badge color="#caf0f8">
                <ShoppingCartOutlined />
              </Badge>
            </AnimatedButton>
          </Link>
          <Link to="/TrainingPage" style={{ textDecoration: 'none' }}>
            <AnimatedButton style={{ color: "#caf0f8" }}>Training</AnimatedButton>
          </Link>
          <Link to="/BlogPage" style={{ textDecoration: 'none' }}> {/* New Link */}
            <AnimatedButton style={{ color: "#caf0f8" }}>Blog</AnimatedButton>
          </Link>
          {loggedIn ? (
            <>
              <Link to="/profile" style={{ textDecoration: 'none' }}>
                <AnimatedButton style={{ color: "#caf0f8" }}>Profile</AnimatedButton>
              </Link>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <AnimatedButton style={{ color: "#caf0f8" }}>Logout</AnimatedButton>
              </Link>
              <Avatar alt="Profile Picture" src={Ediprofile} style={{ marginLeft: 10 }} />
            </>
          ) : (
            <>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <AnimatedButton style={{ color: "#caf0f8" }}>LOGIN</AnimatedButton>
              </Link>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <AnimatedButton style={{ color: "#caf0f8" }}>REGISTER</AnimatedButton>
              </Link>
            </>
          )}
        </Right>
        <MenuIconContainer>
          <IconButton onClick={handleDrawerToggle}>
            <Menu style={{ color: "#caf0f8" }} />
          </IconButton>
        </MenuIconContainer>
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
          {drawerContent}
        </Drawer>
      </Container>
    </>
  );
};

export default Navbar;
