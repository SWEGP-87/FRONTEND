


import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";
import styled from "styled-components";
import Header from  "../components/ProductHeader"
import TrainingHeader from "../components/TrainingHeader"
import ReviewPage from "./ReviewPage";


const Container= styled.div`

  //  width: 100%;
  // height: 100%;
  // /* Add your background pattern here */
  // background-image: radial-gradient( #173d49 85%, #36a6f1 90%,#0d1725 20%);
  // background-size: 50px 50px;

  //   width: 100%;
  // height: 100%;
  // background: repeating-radial-gradient(circle at 50%, rgb(26, 133, 233), rgb(104, 183, 230) 1em, green 1em, #36a6f1 2em);

  width: 100%;
  height: 100%;
  /* Add your background pattern here */
  background: rgb(57, 59, 59);
  background: radial-gradient(
    circle at 50%,
    rgb(41, 39, 39),
    #333 50%,
    transparent 51%,
    #eee 10%,
    rgb(0, 0, 0) 55% 72%,
    rgb(15, 96, 189) 50%
  );
  background-size: 10px 10px;

`


// #f8f1f1ee


const Home = () => {
  return (
    <Container>
      {/* <Announcement /> */}
      <Navbar  />
      <Slider />
      <Header/>
      <Products/>
      <TrainingHeader/>
      <Categories />
      <ReviewPage/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};  

export default Home;