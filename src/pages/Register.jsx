import React, { useState } from 'react';
import styled from "styled-components";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import video from "../assets/catV.mp4";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0;
  position: relative; /* Ensure the content is layered over the video */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Place the video behind the content */
`;

const Wrapper = styled.div`
  width: 400px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5); /* Semi-dark background with 50% opacity */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  backdrop-filter: blur(10px); /* Apply blur effect */
  color: #fff;
  z-index: 1; /* Ensure the content appears above the video */
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

const InputRow = styled.div`
  display: flex;
  width: 92%;
  justify-content: space-between;
  padding-right: 50px;
`;

const InputBox = styled.div`
  position: relative;
  width: ${(props) => (props.fullWidth ? '98%' : '40%')};
  margin: 10px 0;
`;

const Input = styled.input`
  width: 90%;
  padding: 15px 15px 15px 45px;  /* Extra padding for icon */
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
  right: 15px;
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

const Terms$ConditionsText = styled.span`
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

/*const Error = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;*/

const PasswordError = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  text-align: left;
  margin-left: 0; 
`;




const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');


  const navigate = useNavigate();


  const togglePassword = () => setShowPassword(prev => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword(prev => !prev);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

      // Validate if passwords match before making the API call
      if (password !== confirmPassword) {
        setPasswordError('Passwords do not match');
        return; // Prevent form submission
      }

    try {
      const response = await axios.post('http://localhost:3000/register', {
        name: username,
        password,
        email,
      });

      if (response.status === 200) {
        // Handle successful registration
        setPasswordError('');
        console.log('User registered:', response.data);
        navigate('/HomeIN')
      } else {
        // Handle errors
        console.error('Error registering user:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Container>
      <BackgroundVideo autoPlay loop muted>
        <source src="https://media.istockphoto.com/id/1397738659/video/slow-motion-many-catfish-in-the-swamp-at-the-public-park-and-having-a-hand-throw-bread-for.mp4?s=mp4-640x640-is&k=20&c=2KEJhPSDSHBny5O6uRYGhqxFOHXQT4CSfixvr7X3eHU=" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <InputRow>
            <InputBox>
              <Input placeholder="First Name" />
              <Icon><FaUser /></Icon>
            </InputBox>
            <InputBox>
              <Input placeholder="Last Name" />
              <Icon><FaUser /></Icon>
            </InputBox>
          </InputRow>
          <InputBox fullWidth>
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Icon><FaUser /></Icon>
          </InputBox>
          <InputBox fullWidth>
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Icon><FaEnvelope /></Icon>
          </InputBox>
          <InputBox fullWidth>
            <Input
              value={password}
              // onChange={(e) => setPassword(e.target.value)}
              onChange={handlePasswordChange}
              type={showPassword ? 'text' : 'password'}
              placeholder="Create Password"
            />
            <Icon><FaLock /></Icon>
            <ToggleIcon onClick={togglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </ToggleIcon>
          </InputBox>
          <InputBox fullWidth>
            <Input
              value={confirmPassword}
              // onChange={(e) => setConfirmPassword(e.target.value)}
              onChange={handleConfirmPasswordChange}
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
            />
            <Icon><FaLock /></Icon>
            <ToggleIcon onClick={toggleConfirmPassword}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </ToggleIcon>
          </InputBox>
          {passwordError && <PasswordError>{passwordError}</PasswordError>}
          <RememberMeContainer>
            <label>
              <RememberMeCheckbox type="checkbox" />
              Remember me
            </label>
            <LinkStyled to="#">
              
            </LinkStyled>
          </RememberMeContainer>
          <LinkStyled to="/login">
            Already have an account? <RegisterText>Sign In</RegisterText>
          </LinkStyled>
          <Button type="submit">CREATE NEW ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}
;

export default RegisterForm;
