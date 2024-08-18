



import React from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SchoolIcon from '@material-ui/icons/School';
import ReactPlayer from 'react-player';
import video from "../assets/catV.mp4";
import qualityWaterT from "../Videos/qualityWaterT.mp4";
import HatchTraining from "../Videos/HatchTraining.mp4"
import TilapiaBroodstock from "../Videos/TilapiaBroodstock.mp4";

const PageContainer = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50%, rgb(41, 39, 39), #333 50%, transparent 51%, #eee 10%, rgb(0, 0, 0) 55% 72%, rgb(15, 96, 189) 50%);
  background-size: 10px 10px;
`;

const Header = styled.div`
  background: linear-gradient(to right, teal, #2575fc);
  color: white;
  padding: 50px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 5%;
`;

const HeaderTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: white;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const HeaderDescription = styled.p`
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const VideosSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
`;

const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5fbfd;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  width: 45%;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const Description = styled.p`
  padding: 20px;
  font-size: 16px;
  color: #555;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 15px;
  }
`;

const EnrollmentSection = styled.div`
  background-color: #f5fbfd;
  padding: 40px 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const EnrollmentTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const EnrollmentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #3f51b5;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #303f9f;
  }
`;

const videos = [
  {
    id: 1,
    src: video,
    title: "Fish Spawning",
    desc: "Learn about fish spawning and how to manage it effectively.",
  },
  {
    id: 2,
    title: "Quality Water Training",
    src: qualityWaterT,
    desc: "We offer training on water 💧 Quality Testing and water treatment and management",
  },
  {
    id: 3,
    src: HatchTraining,
    title: "Hatchery Training",
    desc: "We offer hatchery training for individuals and organizations",
  },
  {
    id: 4,
    src: TilapiaBroodstock,
    title: "Advanced Farming Strategies",
    desc: "We provide extensive and modern training techniques for tilapia",
  },
];

const TrainingPage = () => {
  return (
    <>
      <Navbar />
      <Header>
        <HeaderTitle>
          <SchoolIcon style={{ marginRight: '10px', fontSize: '40px', color: "red" }} />
          Welcome to Our Training Sessions
        </HeaderTitle>
        <HeaderDescription>
          Explore our comprehensive training videos on various topics including fish spawning and modern farming techniques. Learn from experts and improve your skills.
        </HeaderDescription>
      </Header>
      <PageContainer>
        <VideosSection>
          {videos.map((video, index) => (
            <VideoCard key={index}>
              <VideoWrapper>
                <ReactPlayer
                  url={video.src}
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                  controls
                />
              </VideoWrapper>
              <Description>{video.desc}</Description>
            </VideoCard>
          ))}
        </VideosSection>
        <EnrollmentSection>
          <EnrollmentTitle>Enroll in Our Training Session</EnrollmentTitle>
          <EnrollmentForm>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Input type="text" placeholder="Your Phone Number" required />
            <Textarea placeholder="Your Message" required />
            <Button type="submit">Submit</Button>
          </EnrollmentForm>
        </EnrollmentSection>
      </PageContainer>
      <Footer />
    </>
  );
};

export default TrainingPage;
