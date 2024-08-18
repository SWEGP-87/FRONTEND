import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Eddie from "../assets/Ediprofile.png"

const reviews = [
  {
    id: 1,
    name: "Mr.Edawrd",
    profile: Eddie,
    remark: "This product is amazing! Highly recommend it to everyone.",
  },
  {
    id: 2,
    name: "Jane Smith",
    profile:Eddie,
    remark: "Really satisfied with the quality and performance.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    profile: Eddie,
    remark: "Exceeded my expectations! Will buy again.",
  },
  // Add more reviews as needed
];

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  box-sizing: border-box;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color:  #CAF0F8;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  max-width: 300px;
  box-sizing: border-box;
`;

const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Name = styled.h2`
  margin: 10px 0;
  color: #333;
  font-size: 1.2rem;
`;

const Remark = styled.p`
  color: #555;
  font-size: 1rem;
  text-align: center;
`;

const ReviewPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Title>User Reviews</Title>
      <Slider {...settings}>
        {reviews.map((review) => (
          <ReviewContainer key={review.id}>
            <Profile src={review.profile} alt={review.name} />
            <Name>{review.name}</Name>
            <Remark>"{review.remark}"</Remark>
          </ReviewContainer>
        ))}
      </Slider>
    </Container>
  );
};

export default ReviewPage;
