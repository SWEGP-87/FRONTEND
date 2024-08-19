
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
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';

//import { FixedSizeList as List } from 'react-window';

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
  const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3000/products')  // Fetch products from the backend
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (typeof data.products === 'object') {
          // If data is an object, convert it to an array of values
          const productArray = Object.values(data.products);
          setProducts(productArray);
        } else {
          console.error('Expected an array or object but got:', data.products);
          setProducts([]);
        }
      })
      .catch(error => console.error('Error fetching products:', error));
    }, []);
  
    const productElements = products.reduce((acc, item) => {
      acc.push(
    <Link to={`/product/${item._id || item.id}`} key={item._id || item.id}>
      <Product item={item} key={item._id || item.id} />
     </Link>);
      return acc;
    }, []);
  return (
    <Container>
      {productElements.length > 0 ? (
        productElements
      ) : (
        <p>No products available</p>
      )}
    </Container>
  );
};

export default Products;
