


import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import catV from "../assets/catV.mp4";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  
`;

const categories = [
  {
    id: 1,
    title: "JOIN OUR TRAINING SESSION",
    video: catV,
  },
  {
    id: 2,
    title: "Enroll now for a great tutorial",
    video: catV,
  },
  // Add more categories as needed
];

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;