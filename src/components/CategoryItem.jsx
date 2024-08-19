

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f5fbfd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  
`;

const Title = styled.h1`
  font-size: 24px;
  color:  #CAF0F8;
  z-index: 2;
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <VideoWrapper>
        <Video src={item.video} autoPlay muted loop />
        <Overlay>
          <Title>{item.title}</Title>
        </Overlay>
      </VideoWrapper>
    </Container>
  );
};

export default CategoryItem;