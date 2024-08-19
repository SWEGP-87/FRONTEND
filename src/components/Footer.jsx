



import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f5fbfd;
  color: #333;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Logo = styled.h1`
  color: blue;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  margin: 20px 0;
  font-size: 14px;
  line-height: 1.5;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #${(props) => props.color}DD; // Slightly darker shade
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const Ttitle = styled.h3`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: bold;
  // margin-left:-100px;
   text-align: center;
  

 

`;


const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: bold;
 
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: ;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ListItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  margin-left: 20px;
  @media (min-width: 768px) {
    width: 50%;
     
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Payment = styled.img`
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
`;

const FooterBottom = styled.div`
  text-align: center;
  padding: 10px;
  background-color: #CAF0F8;
  color: #333;
  font-size: 14px;
  margin-top: 20px;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Container>
        <Left>
          <Logo>MannaLand Farms</Logo>
          <Desc>
          We are the best when it comes to affordable fishing stocks and good farming training. We are availbale any time. Thank you 
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Ttitle>Useful Links</Ttitle>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> Ofankor North,Accra
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +233 244121465
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} /> solomonbotwe@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
      <FooterBottom>
        &copy; {currentYear} MannaLand. All rights reserved.
      </FooterBottom>
    </>
  );
};

export default Footer;
