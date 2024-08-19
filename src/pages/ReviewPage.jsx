import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Eddie from "../assets/Ediprofile.png"
import Michael from "../Videos/Michael.jpg"
import Michelle from "../Videos/Michelle.jpg"
import Abigail from "../Videos/Abigail.jpg"
import ChristyRita from "../Videos/ChristyRita.jpg"
import Ruth from "../Videos/Ruth.jpg"
import Asobaby from "../Videos/Asobaby.jpg"

const reviews = [
  {
    id: 1,
    name: "Mr.Michael",
    profile: Michael,
    remark: "This product is amazing! Highly recommend it to everyone.",
  },
  {
    id: 2,
    name: "Ruth",
    profile:Ruth,
    remark: "Really satisfied with the quality and performance.",
  },
  {
    id: 3,
    name: "Edward",
    profile: Eddie,
    remark: "Exceeded my expectations! Will buy again.",
  },
  {
    id: 4,
    name: " Michelle",
    profile:  Michelle,
    remark: "The quality of fish is top-notch! The farming practices are sustainable and efficient.",
},
{
    id: 5,
    name: "Christy and Rita",
    profile: ChristyRita,
    remark: "Excellent service and fresh fish every time. Highly recommend their farming methods!",
},
{
    id: 6,
    name: "Abigail",
    profile: Abigail,
    remark: "Great experience with this fish farming company. The fish are always healthy and of high quality.",
},
{
    id: 7,
    name: "Aso baby",
    profile: Asobaby,
    remark: "Outstanding! The fish are always fresh, and their farming practices are eco-friendly.",
},
// {
//     id: 8,
//     name: "Linda Martinez",
//     profile: Linda,
//     remark: "Impressive quality and excellent customer service. Their fish farming operation is top of the line.",
// }
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
