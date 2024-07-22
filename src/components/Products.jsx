
// import styled from "styled-components";
// import { popularProducts } from "../data";
// import Product from "./Product";


// const Container = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

// const Products = ({ cat, filters, sort }) => {
 
//   return (
//     <Container>
      
//      {popularProducts.map((item)=>(
//         <Product item = {item} key={item.id}/>
//      ))}
//     </Container>
//   );
// };

// export default Products;



import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data"; // Assuming you're importing data from a data file

const Container = styled.div`
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  // gap: 20px;
  // padding: 20px;


    display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
