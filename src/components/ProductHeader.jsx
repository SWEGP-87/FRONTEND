// // import React from 'react'

// // function ProductHeader() {
// //   return (
// //     <div>ProductHeader</div>
// //   )
// // }

// // export default ProductHeader


// import React from 'react';
// import styled from 'styled-components';
// import { LocalMallOutlined } from '@material-ui/icons';

// const HeaderContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 10px 0px;
//   padding: 20px;
//   background-color: #f5fbfd;
//   border-radius: 10px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

//   @media (max-width: 768px) {
//     padding: 10px;
//     margin: 10px 0;
//   }
// `;

// const Icon = styled(LocalMallOutlined)`
//   font-size: 40px !important;
//   color: #3f51b5;
//   margin-right: 10px;

//   @media (max-width: 768px) {
//     font-size: 30px !important;
//   }
// `;

// const Heading = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   color: #333;
//   margin-right:20px

//   @media (max-width: 768px) {
//     font-size: 20px;
//   }
// `;

// function ProductHeader() {
//   return (
//     <HeaderContainer>
//       <Icon />
//       <Heading>Exclusive Products</Heading>
//     </HeaderContainer>
//   );
// }

// export default ProductHeader;




// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { LocalMallOutlined } from '@material-ui/icons';

// const HeaderContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 20px 0;
//   padding: 20px;
//   background-color: #f5fbfd;
//   border-radius: 10px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

//   @media (max-width: 768px) {
//     padding: 10px;
//     margin: 10px 0;
//   }
// `;

// const Icon = styled(LocalMallOutlined)`
//   font-size: 40px !important;
//   color: #3f51b5;
//   margin-right: 10px;

//   @media (max-width: 768px) {
//     font-size: 30px !important;
//   }
// `;

// const colorChange = keyframes`
//   0% { color: #333; }
//   25% { color: #3f51b5; }
//   50% { color: #f44336; }
//   75% { color: #4caf50; }
//   100% { color: #ffeb3b; }
// `;

// const Heading = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   margin-right:500px;
//   animation: ${colorChange} 5s infinite;

//   @media (max-width: 768px) {
//     font-size: 20px;
//     margin-right:0px;
//   }
// `;

// function ProductHeader() {
//   return (
//     <HeaderContainer>
//       <Icon />
//       <Heading>Exclusive Products </Heading>
//     </HeaderContainer>
//   );
// }

// export default ProductHeader;



import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { LocalMallOutlined, ArrowForwardIos } from '@material-ui/icons';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  padding: 20px;
  background-color: #f5fbfd;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
    margin: 10px 0;
  }
`;

const Icon = styled(LocalMallOutlined)`
  font-size: 40px !important;
  color: #3f51b5;
  margin-right: 10px;

  @media (max-width: 768px) {
    font-size: 30px !important;
  }
`;

const colorChange = keyframes`
  0% { color: #333; }
  25% { color: #3f51b5; }
  50% { color: #f44336; }
  75% { color: #4caf50; }
  100% { color: #ffeb3b; }
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  animation: ${colorChange} 5s infinite;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
`;

const ArrowIcon = styled(ArrowForwardIos)`
  font-size: 24px !important;
  color: #333;

  &:hover {
    color: #3f51b5;
  }

  @media (max-width: 768px) {
    font-size: 20px !important;
  }
`;

function ProductHeader() {
  return (
    <HeaderContainer>
      <Icon />
      <Heading>Exclusive Products</Heading>
      {/* <Link to="/another-page"> */}

      {/* this is my called link */}

      <Link to="/ProductList">
        <ArrowContainer>
            More Products
          <ArrowIcon />
        </ArrowContainer>
        </Link>
      
    </HeaderContainer>










  );
}

export default ProductHeader;
