



import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Typography, Card, CardContent } from '@material-ui/core';
import ReactPlayer from 'react-player';
import Footer from "../components/Footer";
import healthyF from "../Videos/healthyF.mp4";
import hatcheryS from "../Videos/hatcheryS.mp4";
import DeliveryF from "../Videos/DeliveryF.mp4";
import Hatchdeliver from "../Videos/Hatchdeliver.mp4";

import HFclient from "../Videos/HFclient.mp4";
import MFbroodstock from "../Videos/MFbroodstock.mp4";
import smokefish from "../Videos/smoke fish.mp4";
import SupplyFreshF from "../Videos/SupplyFreshF.mp4";
import TilapiaBroodstock from "../Videos/TilapiaBroodstock.mp4";


const PageContainer = styled.div`
  margin-top: 6%;
  padding: 20px;
  background-color: #079992;
  min-height: 100vh;
 


  // width: 100%;
  // height: 100%;
  // /* Add your background pattern here */
  // background: repeating-radial-gradient(circle, #000, #000 5px, transparent 6px);
  // background-size: 30px 30px;



   @media (max-width: 768px) {
    padding: 10px;
     margin-top:15%;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 0px;
  font-weight: bold;
  font-size: 2.5rem;
  background-color:#CAF0F8;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ServiceCard = styled(Card)`
  margin: 20px 0;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const VideoPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const ServiceDescription = styled(Typography)`
  margin-top: 10px;
  color: #555;

`;

const IntroductionText = styled.div`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 40px;
  font-weight:;
  color: black;
  background-color:#CAF0F8;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

const services = [
  {
    id: 1,
    title: "Fingerlings",
    videoUrl: healthyF,
    description: "Healthy and fast growing fingerlings for sale."
  },
  {
    id: 2,
    title: "Hatchery Service",
    videoUrl: hatcheryS,
    description: "We provide hatchery services for individuals and community-based organizations"
  },
  {
    id: 3,
    title: "Fingerling Delivery",
    videoUrl: DeliveryF,
    description: "We deliver fingerlings nationwide"
  },

  {
    id: 4,
    title: "Hatch and Deliver",
    videoUrl: Hatchdeliver,
    description: "We hatch for you and deliver all your fingerlings within 8-weeks"
  },

  {
    id: 5,
    title: "Quality male and female catfish ",
    videoUrl: MFbroodstock,
    description: "We hatch for you and deliver all your fingerlings within 8-weeks"
  },
  {
    id: 6,
    title: "Tilapia Broodstocks",
    videoUrl: TilapiaBroodstock,
    description: "Tilapia broodstocks available for sale"
  },
  {
    id: 7,
    title: "Hatching For clients",
    videoUrl: HFclient ,
    description: "We hatch fingerlings for clients upon request"
  },
  {
    id: 8,
    title: "Supply Service",
    videoUrl: SupplyFreshF,
    description: "We supply fresh fish 🐟 to clients at the farm gate"
  },
  {
    id: 9,
    title: "Smoke Fish Available",
    videoUrl: smokefish,
    description: "Fresh and tasty smoked fish available"
  },
];

const ServicePage = () => {
  return (
    <PageContainer maxWidth="lg">
      <Title>Our Services</Title>
      <IntroductionText>
        At <b>Mannaland Farms </b>, we pride ourselves on offering a variety of fishing experiences tailored to meet the needs and preferences of every angler. Whether you're looking for the thrill of deep-sea fishing, the tranquility of coastal fishing, or a personalized charter experience, we have something for everyone. Dive into our range of services and find the perfect adventure for you.
      </IntroductionText>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <ServiceCard>
              <VideoContainer>
                <VideoPlayer url={service.videoUrl} width="100%" height="100%" controls />
              </VideoContainer>
              <CardContent>
                <Typography variant="h6">{service.title}</Typography>
                <ServiceDescription variant="body2">
                  {service.description}
                </ServiceDescription>
              </CardContent>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
      <Footer/>
    </PageContainer>
  );
};

export default ServicePage;
