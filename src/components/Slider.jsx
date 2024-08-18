// // import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// // import { useState } from "react";
// // import styled from "styled-components";
// // import { sliderItems } from "../data";
// // // import { mobile } from "../responsive";
// // import manImage from './Man.jpeg';


// // const Container = styled.div`
// //   width: 100%;
// //   height: 100vh;
// //   display: flex;
// //   position: relative;
// //   overflow: hidden;

// // `;

// // const Arrow = styled.div`
// //   width: 50px;
// //   height: 50px;
// //   background-color: #fff7f7;
// //   border-radius: 50%;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   position: absolute;
// //   top: 0;
// //   bottom: 0;
// //   left: ${(props) => props.direction === "left" && "10px"};
// //   right: ${(props) => props.direction === "right" && "10px"};
// //   margin: auto;
// //   cursor: pointer;
// //   opacity: 0.5;
// //   z-index: 2;
// // `;

// // const Wrapper = styled.div`
// //   height: 100%;
// //   display: flex;
// //   transition: all 1.5s ease;
// //   transform: translateX(${(props) => props.slideIndex * -100}vw);
// //    margin-top: 40px;
// // `;

// // const Slide = styled.div`
// //   width: 100vw; 
// //   height: 100vh;
// //   display: flex;
// //   align-items: center;
// //   background-color: ;
// // `;

// // const ImgContainer = styled.div`
// //   height: 100%;
// //   flex: 1;
// // `;

// // const Image = styled.img`
// //   height: 100%;
// //    width: 100%;
// // `;

// // const InfoContainer = styled.div`
// //   flex: 1;
// //   padding: 50px;
// //   background-color: ;

// // `;

// // const Title = styled.h1`
// //   font-size: 70px;
// // `;

// // const Desc = styled.p`
// //   margin: 50px 0px;
// //   font-size: 20px;
// //   font-weight: 500;
// //   letter-spacing: 3px;
// // `;

// // const Button = styled.button`
// //   padding: 10px;
// //   font-size: 20px;
// //   background-color: transparent;
// //   cursor: pointer;
// // `;

// // const Slider = () => {
// //   const [slideIndex, setSlideIndex] = useState(0);
// //   const handleClick = (direction) => {
// //     if (direction === "left") {
// //       setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
// //     } else {
// //       setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
// //     }
// //   };




// //   return (
// //     <Container>
// //       <Arrow direction="left" onClick={() => handleClick("left")}>
// //         <ArrowLeftOutlined />
// //       </Arrow >
// //       <Wrapper slideIndex={slideIndex}>
// // {sliderItems.map((item)=>(
// //   <Slide bg={item.bg} key={item.id}>
// //     <ImgContainer>
// //     <Image src ={item.img} />
// //     </ImgContainer>
    
// //     <InfoContainer>
// //               <Title>{item.title}</Title>
// //               <Desc>{item.desc}</Desc>
// //               <Button>SHOW NOW</Button>
// //             </InfoContainer>

// //  </Slide>
// // ))}
      
// //         <Slide>
// //         <ImgContainer>
// // <Image src={manImage} />
// //         </ImgContainer>
// //         <InfoContainer>
// //           <Title>MANNA FARMS WELCOMES YOU BACK</Title>
// //           <Desc>Dont compromise on protein , get everything you at a cheaper rate</Desc>
// //           <Button> Patronize  NOW</Button>
// //         </InfoContainer>

// //         </Slide>
       
      
        
        
        

// //       </Wrapper>
     
// //       <Arrow direction="right" onClick={() => handleClick("right")}>
// //         <ArrowRightOutlined />
// //       </Arrow>
// //     </Container>
// //   );
// // };

// // export default Slider;

// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState, useEffect } from "react";
// import styled from "styled-components";
// import { sliderItems } from "../data";
// import man from './Man.jpeg';

// const Container = styled.div`
//   width: 100%;
//   height: 90vh;
//   display: flex;
//   position: relative;
//   overflow: hidden;
//   margin-top:1px
// `;

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;

// const Wrapper = styled.div`
//   height: 100%;
//   display: flex;
//   transition: all 5s ease;
//   transform: translateX(${(props) => props.slideIndex * -100}vw);
//   margin-top: 40px;
// `;

// const Slide = styled.div`
//   width: 100vw; 
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   background-color: #55E6C1;
//   margin-top:10px
// `;

// const ImgContainer = styled.div`
//   height: 90%;
//   flex: 1;
// `;

// const Image = styled.img`
//   height: 100%;
//   width: 100%;
// `;
 
// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 10px;
//   background-colour:red
// `;

// const Title = styled.h1`
//   font-size: 20px;
// `;

// const Desc = styled.p`
//   margin: 50px 0px;
//   font-size: 20px;
//   font-weight: 500;
//   letter-spacing: 3px;
// `;

// const Button = styled.button`
//   padding: 10px;
//   font-size: 20px;
//   background-color: transparent;
//   cursor: pointer;
// `;

// // Media query for responsiveness
// const mobile = `(max-width: 768px)`;

// const MobileWrapper = styled(Wrapper)`
//   @media ${mobile} {
//     height: 100%;
//     margin-top: 45px;
//   }
// `;

// const Slider = () => {
//   const [slideIndex, setSlideIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSlideIndex((prev) => (prev < sliderItems.length ? prev + 1 : 0));
//     }, 50000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const handleClick = (direction) => {
//     if (direction === "left") {
//       setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length);
//     } else {
//       setSlideIndex(slideIndex < sliderItems.length ? slideIndex + 1 : 0);
//     }
//   };

//   return (
//     <Container>
//       <Arrow direction="left" onClick={() => handleClick("left")}>
//         <ArrowLeftOutlined />
//       </Arrow>
//       <MobileWrapper slideIndex={slideIndex}>
//         {sliderItems.map((item) => (
//           <Slide bg={item.bg} key={item.id}>
//             <ImgContainer>
//               <Image src={item.img} />
//             </ImgContainer>
//             <InfoContainer>
//               <Title>{item.title}</Title>
//               <Desc>{item.desc}</Desc>
//               <Button>SHOW NOW</Button>
//             </InfoContainer>
//           </Slide>
//         ))}
       
//       </MobileWrapper>
//       <Arrow direction="right" onClick={() => handleClick("right")}>
//         <ArrowRightOutlined />
//       </Arrow>
//     </Container>
//   );
// };

// export default Slider;

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import manImage from './Man.jpeg';





const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top:1px
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  margin-top: 40px;
`;

const Slide = styled.div`
  width: 100vw; 
  height: 100vh;
  display: flex;
  align-items: center;
  background-color:  #CAF0F8;;
  margin-top:10px
`;

const ImgContainer = styled.div`
  height: 90%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;
 
const InfoContainer = styled.div`
  flex: 1;
  padding: 10px;
  background-colour:red
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

// Media query for responsiveness
const mobile = `(max-width: 768px)`;

const MobileWrapper = styled(Wrapper)`
  @media ${mobile} {
    height: 100%;
    margin-top: 45px;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev < sliderItems.length - 1 ? prev + 1 : 0));
    }, 15000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <MobileWrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      
      </MobileWrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
