// import { Send } from "@material-ui/icons";
// import styled from "styled-components";


// const Container = styled.div`
//   height: 60vh;
//   background-color: #fcf5f5;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;
// const Title = styled.h1`
//   font-size: 70px;
//   margin-bottom: 20px;
// `;

// const Desc = styled.div`
//   font-size: 24px;
//   font-weight: 300;
//   margin-bottom: 20px;


// `;

// const InputContainer = styled.div`
//   width: 50%;
//   height: 40px;
//   background-color: white;
//   display: flex;
//   justify-content: space-between;
//   border: 1px solid lightgray;

// `;

// const Input = styled.input`
//   border: none;
//   flex: 8;
//   padding-left: 20px;
// `;

// const Button = styled.button`
//   flex: 1;
//   border: none;
//   background-color: teal;
//   color: white;
// `;

// const Newsletter = () => {
//   return (
//     <Container>
//       <Title>Newsletter</Title>
//       <Desc>Get timely updates from your favorite products.</Desc>
//       <InputContainer>
//         <Input placeholder="Your email" />
//         <Button>
//           <Send />
//         </Button>
//       </InputContainer>
//     </Container>
//   );
// };

// export default Newsletter;



import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #CAF0F8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 768px) {
    height: auto;
    padding: 40px 20px;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
  color: #555;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  font-size: 16px;

  @media (max-width: 768px) {
    padding-left: 10px;
  }
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005f5f;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
