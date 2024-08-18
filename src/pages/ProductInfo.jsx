// import { Add, Remove } from "@material-ui/icons";
// import styled from "styled-components";
// import Announcement from "../components/Announcement";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import NewsLetter from "../components/NewsLetter";


// const Container = styled.div``;

// const Wrapper = styled.div`
//   padding: 50px;
//   display: flex;
 
// `;

// const ImgContainer = styled.div`
//   flex: 1;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 90vh;
//   object-fit: cover;

// `;

// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 0px 50px;
 
// `;

// const Title = styled.h1`
//   font-weight: 200;
// `;

// const Desc = styled.p`
//   margin: 20px 0px;
// `;

// const Price = styled.span`
//   font-weight: 100;
//   font-size: 40px;
// `;



// const AddContainer = styled.div`
//   width: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

// `;

// const AmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   font-weight: 700;
// `;

// const Amount = styled.span`
//   width: 30px;
//   height: 30px;
//   border-radius: 10px;
//   border: 1px solid teal;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0px 5px;
// `;

// const Button = styled.button`
//   padding: 15px;
//   border: 2px solid teal;
//   background-color: white;
//   cursor: pointer;
//   font-weight: 500;

//   &:hover {
//     background-color: #f8f4f4;
//   }
// `;

// const Product = () => {
  
//   return (
//     <Container>
      
   
//       <Navbar />
//       <Announcement />
//       <Wrapper>
        // <ImgContainer>
        //   <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
        // </ImgContainer>
        // <InfoContainer>
        //   <Title>Tilapia</Title>
        //   <Desc>Plenty quantityaavaiklabel frseeeee</Desc>
        //   <Price>$ 330</Price>

                
           
//           <AddContainer>
//             <AmountContainer>
//               <Remove  />
//               <Amount>1</Amount>
//               <Add />
//             </AmountContainer>
//             <Button>ADD TO CART</Button>
//           </AddContainer>
         
//         </InfoContainer>
//       </Wrapper>
//       <NewsLetter />
//       <Footer />
//     </Container>
//   );
// };

// export default Product;



import React from 'react';
import styled from 'styled-components';
import { Add, Remove } from "@material-ui/icons";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

// Container to wrap the entire product page
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Wrapper to center and add spacing
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

// Image container for responsive behavior
const ImgContainer = styled.div`
  flex: 1;
  max-width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    max-width: 600px;
    margin-bottom: 0;
  }
`;

// Image styling
const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: cover;
  border-radius: 10px;
`;

// Info container for the product information
const InfoContainer = styled.div`
  flex: 1;
  max-width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 500px;
    text-align: left;
    align-items: flex-start;
  }
`;

// Title styling
const Title = styled.h1`
  font-weight: 300;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

// Description styling
const Desc = styled.p`
  margin: 20px 0;
  color: #555;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

// Price styling
const Price = styled.span`
  font-weight: 700;
  font-size: 2rem;
  color: teal;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

// AddContainer for adding items to the cart
const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

// AmountContainer to control the amount of items
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Amount styling
const Amount = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  font-size: 1rem;
`;

// Button styling
const Button = styled.button`
  padding: 15px 30px;
  border: 2px solid teal;
  background-color: white;
  color: teal;
  font-weight: 500;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

// Heading styling
const Heading = styled.header`
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
  margin-bottom: 20px;
  border-bottom: 2px solid teal;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
    margin-top:8%;
`;

const Product = ({ product }) => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Heading>
        <h1>Product Details</h1>
      </Heading>
      <Wrapper>
      <ImgContainer>
          <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Tilapia</Title>
          <Desc>Plenty quantityaavaiklabel frseeeee</Desc>
          <Price>$ 330</Price>
      
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: 'pointer' }} />
              <Amount>1</Amount>
              <Add style={{ cursor: 'pointer' }} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
