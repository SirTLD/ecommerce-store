import React from 'react';
import styled from 'styled-components';
import { productItems } from './Data';
import ProductItem from './ProductItem';

const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <>
      <Container>
        {productItems.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Products;
