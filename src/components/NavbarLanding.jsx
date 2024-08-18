


// import React, { useState } from "react";
// import { Badge, Drawer, IconButton, Button, Avatar } from "@material-ui/core";
// import { Search, ShoppingCartOutlined, Menu, Close,Home } from "@material-ui/icons";
// import styled, { keyframes } from "styled-components";
// import { Link } from "react-router-dom";
// import Announcement from "./Announcement";
// import logo from "../assets/MnAlog0.jpg";

// const AnnouncementContainer = styled.div`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 1000;
// `;

// const Container = styled.div`
//   color: #CAF0F8;
//   height: 60px;
//   display: flex;
//   position: fixed;
//   top: 30px; /* Adjusted to be below the announcement */
//   width: 100%;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 20px;
//   background-color: #b669fd;
//   background-size: 40px 40px;
//   z-index: 999;
//   background-image: radial-gradient(#173d49 85%, #36a6f1 90%, #0d1725 20%);
//   background-size: 50px 50px;
// `;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
// `;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: -20px;
//   padding: 5px;
// `;

// const Input = styled.input`
//   border: none;
// `;

// const Center = styled.div`
//   flex: 1;
//   text-align: center;
// `;

// const Logo = styled.h1`
//   font-weight: bold;
//   font-size: 24px;
//   margin: 0;

//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const Right = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   margin-right: 80px;
//   padding:90px;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const MenuIconContainer = styled.div`
//   display: none;
//   color: ;

//   @media (max-width: 768px) {
//     display: flex;
//     align-items: center;
//     margin-right: 20px;
//     background-image: radial-gradient(#173d49 85%, #36a6f1 90%, #0d1725 20%);
//     background-size: 50px 50px;
//     color: #caf0f8;
//   }
// `;

// const buttonAnimation = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.1); }
//   100% { transform: scale(1); }
// `;

// const AnimatedButton = styled(Button)`
//   animation: ${buttonAnimation} 1s ease-in-out infinite;
// `;

// const MenuItem = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   margin-right: 25px;
//   padding: 10px;
//   color: #CAF0F8;
// `;

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const drawerContent = (
//     <div
//       style={{
//         width: 250,
//         padding: 20,
//         display: "flex",
//         flexDirection: "column",
//         backgroundColor: "#caf0f8", // Sea blue background
//       }}
//       role="presentation"
//       onClick={handleDrawerToggle}
//       onKeyDown={handleDrawerToggle}
//     >
//       <IconButton onClick={handleDrawerToggle} style={{ alignSelf: "flex-end" }}>
//         <Close />
//       </IconButton>
//       <Link to="/">
//         <AnimatedButton>Home</AnimatedButton>
//       </Link>
     
      
//       <Link to="/cart">
//         <AnimatedButton>
//           <Badge color="#caf0f8">
//             <ShoppingCartOutlined />
//           </Badge>
//         </AnimatedButton>
//       </Link>


//       <Link to="/TrainingPage">
//         <AnimatedButton>Training</AnimatedButton>
//       </Link>
//       <Link to="/Login">
//         <AnimatedButton>LOGIN</AnimatedButton>
//       </Link>

//       <Link to="/register">
//         <AnimatedButton>REGISTER</AnimatedButton>
//       </Link>

//       <Link to="/ServicePage">
//         <AnimatedButton>Our Service</AnimatedButton>
//       </Link>


//     </div>
//   );

//   return (
//     <>
//       <AnnouncementContainer>
//         <Announcement />
//       </AnnouncementContainer>
//       <Container>
//         <Left>
//           {/* <SearchContainer>
//             <Input placeholder="Search" />
//             <Search style={{ color: "", fontSize: 16 }} />
//           </SearchContainer> */}

// <Avatar alt="Mannaland Farms Logo" src={logo} />
// <Logo>MANNALAND FARMS</Logo>


//         </Left>
//         <Center>
          
//         </Center>
//         <Right>
//         <Link to="/" style={{ textDecoration: 'none' }}>
//             <AnimatedButton style={{ color: "#caf0f8" }}><Home/></AnimatedButton>
//           </Link>
          

//           <Link to="/cart" style={{ textDecoration: 'none' }}>
//             <AnimatedButton style={{ color: "#caf0f8" }}>
//               <Badge color="#caf0f8">
//                 <ShoppingCartOutlined />
//               </Badge>
//             </AnimatedButton>
//           </Link>
//           <Link to="/TrainingPage" style={{ textDecoration: 'none', color: "red" }}>
//             <AnimatedButton style={{ color: "#caf0f8" }}>Training</AnimatedButton>
//           </Link>
//           <Link to="/Login" style={{ textDecoration: 'none', color: "red" }}>
//             <AnimatedButton style={{ color: "#caf0f8" }}>LOGIN</AnimatedButton>
//           </Link>
//           <Link to="/register" style={{ textDecoration: 'none' }}>
//             <AnimatedButton style={{ color: "#caf0f8" }}>REGISTER</AnimatedButton>
//           </Link>
//           <Link to="/ServicePage" style={{ textDecoration: 'none' }}>
//             <AnimatedButton style={{ color: "#caf0f8" }}>Our Service</AnimatedButton>
//           </Link>
//         </Right>
//         <MenuIconContainer>
//           <IconButton onClick={handleDrawerToggle}>
//             <Menu style={{ color: "#caf0f8" }} />
//           </IconButton>
//         </MenuIconContainer>
//         <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
//           {drawerContent}
//         </Drawer>
//       </Container>
//     </>
//   );
// };

// export default Navbar;





// import React, { useState } from "react";
// import { Badge, Drawer, IconButton, Button, Avatar } from "@material-ui/core";
// import { Search, ShoppingCartOutlined, Menu, Close, Home } from "@material-ui/icons";
// import styled, { keyframes } from "styled-components";
// import { Link } from "react-router-dom";
// import Announcement from "./Announcement";
// import logo from "../assets/MnAlog0.jpg";

// const AnnouncementContainer = styled.div`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 1000;
// `;

// const Container = styled.div`
//   color: #caf0f8;
//   height: 60px;
//   display: flex;
//   position: fixed;
//   top: 30px; /* Adjusted to be below the announcement */
//   width: 100%;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 20px;
//   background-color: #b669fd;
//   background-size: 40px 40px;
//   z-index: 999;
//   background-image: radial-gradient(#173d49 85%, #36a6f1 90%, #0d1725 20%);
//   background-size: 50px 50px;
// `;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;

// const Center = styled.div`
//   flex: 1;
//   text-align: center;
// `;

// const Logo = styled.h1`
//   font-weight: bold;
//   font-size: 24px;
//   margin: 0;
//   display: flex;
//   align-items: center;
//   gap: 10px;

//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const Right = styled.div`
//   flex: 3;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   margin-right:100px;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const MenuIconContainer = styled.div`
//   display: none;

//   @media (max-width: 768px) {
//     display: flex;
//     align-items: center;
//     margin-right: 20px;
//     background-image: radial-gradient(#173d49 85%, #36a6f1 90%, #0d1725 20%);
//     background-size: 50px 50px;
//     color: #caf0f8;
//   }
// `;

// const buttonAnimation = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.1); }
//   100% { transform: scale(1); }
// `;

// const AnimatedButton = styled(Button)`
//   animation: ${buttonAnimation} 1s ease-in-out infinite;
// `;

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const drawerContent = (
//     <div
//       style={{
//         width: 250,
//         padding: 20,
//         display: "flex",
//         flexDirection: "column",
//         backgroundColor: "#caf0f8", // Sea blue background
//       }}
//       role="presentation"
//       onClick={handleDrawerToggle}
//       onKeyDown={handleDrawerToggle}
//     >
//       <IconButton onClick={handleDrawerToggle} style={{ alignSelf: "flex-end" }}>
//         <Close />
//       </IconButton>
//       <Link to="/">
//         <AnimatedButton>Home</AnimatedButton>
//       </Link>
//       <Link to="/cart">
//         <AnimatedButton>
//           <Badge color="#caf0f8">
//             <ShoppingCartOutlined />
//           </Badge>
//         </AnimatedButton>
//       </Link>
//       <Link to="/TrainingPage">
//         <AnimatedButton>Training</AnimatedButton>
//       </Link>
//       <Link to="/Login">
//         <AnimatedButton>LOGIN</AnimatedButton>
//       </Link>
//       <Link to="/register">
//         <AnimatedButton>REGISTER</AnimatedButton>
//       </Link>
//       <Link to="/ServicePage">
//         <AnimatedButton>Our Service</AnimatedButton>
//       </Link>
//     </div>
//   );

//   return (
//     <>
//       <AnnouncementContainer>
//         <Announcement />
//       </AnnouncementContainer>
//       <Container>
//         <Left>
//           <Avatar alt="Mannaland Farms Logo" src={logo} style={{padding:"10px"}}/>
//           <Logo>MANNALAND FARMS</Logo>
//         </Left>
//         <Center></Center>
//         <Right>
//           <Link to="/" style={{ textDecoration: 'none' }}>
//             <AnimatedButton style={{ color: "#caf0f8" }}><Home /></AnimatedButton>
//           </Link>
//           <Link to="/cart" style={{ textDecoration: 'none' }}>
//             <AnimatedButton style={{ color: "#caf0f8" }}>
//               <Badge color="#caf0f8">
//                 <ShoppingCartOutlined />
//               </Badge>
//             </AnimatedButton>
//           </Link>
//           <Link to="/TrainingPage" style={{ textDecoration: 'none' }}>
//             <AnimatedButton style={{ color: "#caf0f8" }}>Training</AnimatedButton>
//           </Link>
//           <Link to="/Login" style={{ textDecoration: 'none' }}>
//             <AnimatedButton style={{ color: "#caf0f8" }}>LOGIN</AnimatedButton>
//           </Link>
//           <Link to="/register" style={{ textDecoration: 'none' }}>
//             <AnimatedButton style={{ color: "#caf0f8" }}>REGISTER</AnimatedButton>
//           </Link>
//           <Link to="/ServicePage" style={{ textDecoration: 'none' }}>
//             <AnimatedButton style={{ color: "#caf0f8" }}>Our Service</AnimatedButton>
//           </Link>
//           <Link to="/More" style={{ textDecoration: 'none' }}>
//             <AnimatedButton style={{ color: "#caf0f8" }}>More</AnimatedButton>
//           </Link>
//         </Right>
//         <MenuIconContainer>
//           <IconButton onClick={handleDrawerToggle}>
//             <Menu style={{ color: "#caf0f8" }} />
//           </IconButton>
//         </MenuIconContainer>
//         <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
//           {drawerContent}
//         </Drawer>
//       </Container>
//     </>
//   );
// };

// export default Navbar;






import React, { useState } from "react";
import { Badge, Drawer, IconButton, Button, Avatar, Menu as MaterialMenu, MenuItem as MaterialMenuItem } from "@material-ui/core";
import { Search, ShoppingCartOutlined, Menu, Close, Home, ExpandMore } from "@material-ui/icons";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Announcement from "./Announcement";
import logo from "../assets/MnAlog0.jpg";

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

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 5%;

   :hover {
  text-decoration: underline;
}

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

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const drawerContent = (
    <div
      style={{
        width: 250,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#caf0f8", // Sea blue background
      }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <IconButton onClick={handleDrawerToggle} style={{ alignSelf: "flex-end" }}>
        <Close />
      </IconButton>
      <Link to="/">
        <AnimatedButton><Home/></AnimatedButton>
      </Link>
      <Link to="/cart">
        <AnimatedButton>
          <Badge color="#caf0f8">
            <ShoppingCartOutlined />
          </Badge>
        </AnimatedButton>
      </Link>
      <Link to="/TrainingPage">
        <AnimatedButton>Training</AnimatedButton>
      </Link>
      <Link to="/Login">
        <AnimatedButton>LOGIN</AnimatedButton>
      </Link>
      <Link to="/register">
        <AnimatedButton>REGISTER</AnimatedButton>
      </Link>
      <Link to="/ServicePage">
        <AnimatedButton>Our Service</AnimatedButton>
      </Link>
    </div>
  );

  return (
    <>
      <AnnouncementContainer>
        <Announcement />
      </AnnouncementContainer>
      <Container>
        <Left>
          <Avatar alt="Mannaland Farms Logo" src={logo} style={{ padding: "10px" }} />
          <Logo>MANNALAND FARMS</Logo>
        </Left>
        <Center></Center>
        <Right>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <AnimatedButton style={{ color: "#caf0f8" }}><Home /></AnimatedButton>
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
          <Link to="/Login" style={{ textDecoration: 'none' }}>
            <AnimatedButton style={{ color: "#caf0f8" }}>LOGIN</AnimatedButton>
          </Link>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <AnimatedButton style={{ color: "#caf0f8" }}>REGISTER</AnimatedButton>
          </Link>
          <Link to="/ServicePage" style={{ textDecoration: 'none' }}>
            <AnimatedButton style={{ color: "#caf0f8" }}>Our Service</AnimatedButton>
          </Link>
          <IconButton onClick={handleDropdownOpen} style={{ color: "#caf0f8" }}>
          <AnimatedButton style={{ color: "#caf0f8" }}>More</AnimatedButton>
            <ExpandMore />
          </IconButton>
          <MaterialMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleDropdownClose}
            style={{ marginTop: "45px" }}
          >
            
            <Link to="/FAQPage" style={{ textDecoration: 'none', color: "#173d49" }}>
              <MaterialMenuItem onClick={handleDropdownClose}>FAQ</MaterialMenuItem>
            </Link>


            <Link to="/ContactPage" style={{ textDecoration: 'none', color: "#173d49" }}>
              <MaterialMenuItem onClick={handleDropdownClose}> our Contact</MaterialMenuItem>
            </Link>
            <Link to="/AboutPage" style={{ textDecoration: 'none', color: "#173d49" }}>
              <MaterialMenuItem onClick={handleDropdownClose}> About us</MaterialMenuItem>
            </Link>
            {/* Add more dropdown items here */}
          </MaterialMenu>
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
