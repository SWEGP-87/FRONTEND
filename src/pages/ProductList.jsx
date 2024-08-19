



import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Container = styled.div`

width: 100%;
height: 100%;
/* Add your background pattern here */
background: rgb(57, 59, 59);
background: radial-gradient(
  circle at 50%,
  rgb(41, 39, 39),
  #333 50%,
  transparent 51%,
  #eee 10%,
  rgb(0, 0, 0) 55% 72%,
  rgb(15, 96, 189) 50%
);
background-size: 10px 10px;


`;

const Title = styled.h1`
  margin: %;
  color:#CAF0F8;

`;

const Heading = styled.h1`
  background-color:teal;
  color:#CAF0F8;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      
      <Title>Mannaland</Title>

      <Heading>Get all your products here</Heading>
      {/* <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color">
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size">
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price</Option>
            <Option>Black(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer> */}
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;

