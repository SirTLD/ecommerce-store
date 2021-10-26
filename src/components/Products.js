import React from 'react';
import styled from 'styled-components';
import { productItems } from './Data';
import ProductItem from './ProductItem';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ padding: '0', width: '100vw' })}
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
