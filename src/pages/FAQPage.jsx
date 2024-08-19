






import React from 'react';
import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }


// width: 100%;
//   height: 100%;
//   --color: #a748f5;
//   background: linear-gradient(95deg, var(--color) 25%, transparent 25%) -50px 0,
//         linear-gradient(-15deg, var(--color) 25%, transparent 25%) -50px 0,
//         linear-gradient(25deg, transparent 75%, var(--color) 75%) -50px 0,
//         linear-gradient(-45deg, transparent 75%, var(--color) 75%) -50px 0,
//         linear-gradient(-15deg, transparent 75%, var(--color) 75%) -50px 0;
//   background-color: #b669fd;
//   background-size: 40px 40px;


width: 100%;
height: 100%;
--color: #48cae4; /* Adjusted color to complement the background */
background: linear-gradient(95deg, var(--color) 25%, transparent 25%) -50px 0,
        linear-gradient(-15deg, var(--color) 25%, transparent 25%) -50px 0,
        linear-gradient(25deg, transparent 75%, var(--color) 75%) -50px 0,
        linear-gradient(-45deg, transparent 75%, var(--color) 75%) -50px 0,
        linear-gradient(-15deg, transparent 75%, var(--color) 75%) -50px 0;
background-color: #CAF0F8; /* Changed the background color */
background-size: 40px 40px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Added a subtle shadow for depth */
border-radius: 10px; /* Rounded corners for smoother edges */



`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-top: 70px;
  text-align: center;
  color: #333;
  @media (max-width: 768px) {
    font-size: 2rem;
  }

`;

const FAQItem = styled(Accordion)`
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  width:80%;
  margin-left:10%;
`;

const Question = styled(Typography)`
  font-weight: bold;
  color: #007bff;
  background-color: #e0f7fa;
  padding: 10px;
  border-radius: 4px;
`;

const Answer = styled(Typography)`
  color: #555;
  background-color: #f1f8e9;
  padding: 10px;
  border-radius: 4px;
`;

const FAQs = [
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy. Items must be in their original condition.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. Shipping fees may vary.',
  },
  {
    question: 'How can I track my order?',
    answer: 'You will receive a tracking number via email once your order has shipped.',
  },
  {
    question: 'Can I change my order after placing it?',
    answer: 'You can change your order within 24 hours of placing it by contacting our customer service.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers.',
  },
];

const FAQ = () => {
  return (
    <Container>
      
      <Header>Frequently Asked Questions</Header>
      {FAQs.map((faq, index) => (
        <FAQItem key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Question>{faq.question}</Question>
          </AccordionSummary>
          <AccordionDetails>
            <Answer>{faq.answer}</Answer>
          </AccordionDetails>
        </FAQItem>
      ))}
      <Footer/>
    </Container>
  );
};

export default FAQ;

