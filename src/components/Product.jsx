// // import {
// //     FavoriteBorderOutlined,
// //     SearchOutlined,
// //     ShoppingCartOutlined,
// //   } from "@material-ui/icons";
  
// //   import styled from "styled-components";
  
// //   const Info = styled.div`
// //     opacity: 0;
// //     width: 100%;
// //     height: 100%;
// //     position: absolute;
// //     top: 0;
// //     left: 0;
// //     background-color: rgba(0, 0, 0, 0.2);
// //     z-index: 3;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     transition: all 0.5s ease;
// //     cursor: pointer;
// //   `;
  
// //   const Container = styled.div`
// //     flex: 1;
// //     margin: 5px;
// //     min-width: 280px;
// //     height: 350px;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     background-color: #f5fbfd;
// //     position: relative;
  
// //     &:hover ${Info}{
// //       opacity: 1;
// //     }
// //   `;
  
// //   const Circle = styled.div`
// //     width: 200px;
// //     height: 200px;
// //     border-radius: 50%;
// //     background-color: white;
// //     position: absolute;
// //   `;
  
// //   const Image = styled.img`
// //     height: 75%;
// //     z-index: 2;
// //   `;
  
// //   const Icon = styled.div`
// //     width: 40px;
// //     height: 40px;
// //     border-radius: 50%;
// //     background-color: white;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     margin: 10px;
// //     transition: all 0.5s ease;
// //     &:hover {
// //       background-color: #e9f5f5;
// //       transform: scale(1.1);
// //     }
// //   `;
  
// //   const Product = ({ item }) => {
// //     return (
// //       <Container>
// //         <Circle />
// //         <Image src={item.img} />
// //         <Info>
// //           <Icon>
// //             <ShoppingCartOutlined />
// //           </Icon>
// //           <Icon>
           
// //             <SearchOutlined />
       
// //           </Icon>
// //           <Icon>
// //             <FavoriteBorderOutlined />
// //           </Icon>
// //         </Info>
// //       </Container>
// //     );
// //   };
  
// //   export default Product;
  


// import {
//   FavoriteBorderOutlined,
//   SearchOutlined,
//   ShoppingCartOutlined,
// } from "@material-ui/icons";
// import styled from "styled-components";

// const Container = styled.div`
//   flex: 1;
//   margin: 10px;
//   min-width: 300px;
//   max-width: 45%;
//   height: 450px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   background-color: #f5fbfd;
//   position: relative;
//   border-radius: 10px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
//   }

//   @media (max-width: 768px) {
//     min-width: 100%;
//     max-width: 100%;
//     margin: 10px 0;
//   }
// `;

// const ImageContainer = styled.div`
//   width: 100%;
//   height: 60%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #fff;
// `;

// const Image = styled.img`
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
// `;

// const InfoContainer = styled.div`
//   width: 100%;
//   height: 40%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   padding: 10px;
//   text-align: center;
//   background-color: #fff;
// `;

// const Title = styled.h2`
//   font-size: 18px;
//   font-weight: bold;
//   margin: 10px 0;
// `;

// const Desc = styled.p`
//   font-size: 14px;
//   color: #777;
//   margin: 5px 0;
// `;

// const Price = styled.span`
//   font-size: 16px;
//   font-weight: bold;
//   color: #333;
//   margin: 5px 0;
// `;

// const IconContainer = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   margin-top: 10px;
// `;

// const Icon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #e9f5f5;
//     transform: scale(1.1);
//   }
// `;

// const Product = ({ item }) => {
//   return (
//     <Container>
//       <ImageContainer>
//         <Image src={item.img} alt={item.title} />
//       </ImageContainer>
//       <InfoContainer>
//         <Title>{item.title}</Title>
//         <Desc>{item.desc}</Desc>
//         <Price>${item.price}</Price>
//       </InfoContainer>
//       <IconContainer>
//         <Icon>
//           <ShoppingCartOutlined />
//         </Icon>
//         <Icon>
//           <SearchOutlined />
//         </Icon>
//         <Icon>
//           <FavoriteBorderOutlined />
//         </Icon>
//       </IconContainer>
//     </Container>
//   );
// };

// export default Product;





// import {
//   FavoriteBorderOutlined,
//   SearchOutlined,
//   ShoppingCartOutlined,
// } from "@material-ui/icons";
// import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   background-color: #f5fbfd;
//   position: relative;
//   border-radius: 10px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
//   }

//   width: 100%;
//   height: 80%;
//   padding-top:30%
  
// `;

// const ImageContainer = styled.div`
//   width: 100%;
//   height: 60%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #fff;
// `;

// const Image = styled.img`
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
// `;

// const InfoContainer = styled.div`
//   width: 100%;
//   height: 40%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: ;
//   padding: 0px;
//   text-align: center;
//   background-color: #fff;
// `;

// const Title = styled.h2`
//   font-size: 18px;
//   font-weight: bold;
//   margin: 10px 0;
// `;

// const Desc = styled.p`
//   font-size: 14px;
//   color: #777;
//   margin: 5px 0;
// `;

// const Price = styled.span`
//   font-size: 16px;
//   font-weight: bold;
//   color: #333;
//   margin: 5px 0;
// `;

// const IconContainer = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   margin-top:;
// `;

// const Icon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #e9f5f5;
//     transform: scale(1.1);
//   }
// `;

// const Product = ({ item }) => {
//   return (
//     <Container>
//       <ImageContainer>
//         <Image src={item.img} alt={item.title} />
//       </ImageContainer>
//       <InfoContainer>
//         <Title>{item.title}</Title>
//         <Desc>{item.desc}</Desc>
//         <Price>${item.price}</Price>
//       </InfoContainer>
//       <IconContainer>
//         <Icon>
//           <ShoppingCartOutlined />
//         </Icon>
//         <Icon>
//           <SearchOutlined />
//         </Icon>
//         <Icon>
//           <FavoriteBorderOutlined />
//         </Icon>
//       </IconContainer>
//     </Container>
//   );
// };

// export default Product;




// import {
//   FavoriteBorderOutlined,
//   SearchOutlined,
//   ShoppingCartOutlined,
// } from "@material-ui/icons";
// import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background-color: #f5fbfd;
//   position: relative;
//   border-radius: 10px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   transition: all 0.3s ease;
//   width: 100%;
//   height: 300px;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
//   }

//   @media (max-width: 768px) {
//     flex-direction: column;
//     height: auto;
//   }
// `;

// const ImageContainer = styled.div`
//   width: 50%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #fff;

//   @media (max-width: 768px) {
//     width: 100%;
//     height: 200px;
//   }
// `;

// const Image = styled.img`
//   height: 100%;
//   width: 100%;
//   object-fit: cover;

//   @media (max-width: 768px) {
//     height: 100%;
//     width: 100%;
    
//   }
// `;

// const InfoContainer = styled.div`
//   width: 50%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   padding: 20px;
//   text-align: left;
//   background-color: #fff;

//   @media (max-width: 768px) {
//     width: 100%;
//     padding: 10px;
//     text-align: center;
//     align-items: center;
//   }
// `;

// const Title = styled.h2`
//   font-size: 18px;
//   font-weight: bold;
//   margin: 10px 0;
// `;

// const Desc = styled.p`
//   font-size: 14px;
//   color: #777;
//   margin: 5px 0;
// `;

// const Price = styled.span`
//   font-size: 16px;
//   font-weight: bold;
//   color: #333;
//   margin: 5px 0;
// `;

// const IconContainer = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   margin-top: 10px;

//   @media (max-width: 768px) {
//     justify-content: center;
//   }
// `;

// const Icon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease;
//   margin-right: 10px;

//   &:hover {
//     background-color: #e9f5f5;
//     transform: scale(1.1);
//   }
// `;

// const Product = ({ item }) => {
//   return (
//     <Container>
//       <ImageContainer>
//         <Image src={item.img} alt={item.title} />
//       </ImageContainer>
//       <InfoContainer>
//         <Title>{item.title}</Title>
//         <Desc>{item.desc}</Desc>
//         <Price>${item.price}</Price>
//         <IconContainer>
//           <Icon>
//             <ShoppingCartOutlined />
//           </Icon>
//           <Icon>
//             <SearchOutlined />
//           </Icon>
//           <Icon>
//             <FavoriteBorderOutlined />
//           </Icon>
//         </IconContainer>
//       </InfoContainer>
//     </Container>
//   );
// };

// export default Product;



import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import {useState,useEffect} from 'react'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5fbfd;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  height: 300px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  text-align: left;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 10px;
    text-align: left;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;

const Desc = styled.p`
  font-size: 14px;
  color: #777;
  margin: 5px 0;
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 5px 0;
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-right: 10px;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  
    
  return (
    <Container>
      <ImageContainer>
         <Image src={item.image} alt={item.name} />
      </ImageContainer>
      <InfoContainer>
        <Title>{item.name}</Title>
        <Desc>{item.description}</Desc>
        <Price>${item.price}</Price>
        <IconContainer>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </IconContainer>
      </InfoContainer>
    </Container>
  );
};

export default Product;




// i will the client if he is ok with the mobile design or not

