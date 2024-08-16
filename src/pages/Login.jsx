
// import styled from "styled-components";



// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
//       center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 25%;
//   padding: 20px;
//   background-color: white;

// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0;
//   padding: 10px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
//   &:disabled {
//     color: green;
//     cursor: not-allowed;
//   }
// `;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
//   color:teal;
// `;

// const Error = styled.span`
//   color: red;
// `;

// const Login = () => {
  
//   return (
//     <Container>
//       <Wrapper>
//         <Title>SIGN IN</Title>
//         <Form>
//           <Input
//             placeholder="username"
//           />
//           <Input
//             placeholder="password"
//             type="password"
           
//           />
//           <Button>
//             LOGIN
//           </Button>
         
//           <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
//           <Link>CREATE A NEW ACCOUNT</Link>
//         </Form>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Login;



//Login.jsx
import React, { useState } from 'react';
import styled from "styled-components";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("https://www.bentoli.com/wp-content/uploads/2018/02/fish-farming.jpg")
      center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 400px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5); /* Semi-dark background with 50% opacity */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  backdrop-filter: blur(10px); /* Apply blur effect */
  color: #fff; /* Adjust text color to ensure readability */
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  position: relative;
  width: 84%;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 100%; /* Full width for the input */
  padding: 15px 15px 15px 45px; /* Extra padding for icon */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Semi-transparent border */
  border-radius: 8px;
  font-size: 16px;
  color: #fff; /* White text color for contrast */
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  outline: none;
  transition: border-color 0.3s ease, background 0.3s ease;

  &:focus {
    border-color: teal; /* Change focus border color to teal */
    background: rgba(0, 0, 0, 0.7); /* Darker background on focus for better visibility */
  }
`;

const Icon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #fff;
`;

const ToggleIcon = styled.div`
  position: absolute;
  right: -25px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #fff;
  cursor: pointer;
`;

const Button = styled.button`
  width: 90%;
  padding: 15px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin: 20px auto 0;

  &:hover {
    background-color: #004d40;
    transform: scale(1.05);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const LinkStyled = styled(Link)`
  margin-top: 15px;
  font-size: 14px;
  color: #fff; /* Set the default color to white */
  text-decoration: none;
  transition: color 0.3s ease;
`;

const RegisterText = styled.span`
  font-weight: 700; 
  color: teal;
  font-size: 18px;
  transition: color 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    color: #004d40;
    text-decoration: underline;
  }
`;

const ForgotPasswordText = styled.span`
  color: teal;
  font-size: 16px;
  transition: color 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    color: #004d40;
    text-decoration: underline;
  }
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space out the checkbox and link */
  margin-top: 10px;
`;

const RememberMeCheckbox = styled.input`
  margin-right: 10px; /* Space between checkbox and label */
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(prev => !prev);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        // Handle successful login and redirect to homepage or dashboard
        console.log('User logged in:', response.data);
        navigate('/HomeIN'); // Redirect to homepage

      } else {
        // Handle errors
        console.error('Error logging in:', response.data.message);
      }

    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form onSubmit={handleSubmit}>
          <InputBox>
            <Input placeholder="Username or Email" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Icon><FaUser /></Icon>
          </InputBox>
          <InputBox>
            <Input
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Icon><FaLock /></Icon>
            <ToggleIcon onClick={togglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </ToggleIcon>
          </InputBox>
          <Button type="submit">Login</Button>
          <RememberMeContainer>
            <label>
              <RememberMeCheckbox type="checkbox" />
              Remember me
            </label>
            <LinkStyled to="#">
              <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
            </LinkStyled>
          </RememberMeContainer>
          <LinkStyled to="/register">
            Don't have an account? <RegisterText>Register</RegisterText>
          </LinkStyled>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;