import React from 'react';
import styled from 'styled-components';
import { productItems } from './Data';
import ProductItem from './ProductItem';

const Container = styled.div``;

const Products = () => {
  return (
    <>
      <Container>
        {productItems.map((items) => (
          <ProductItem item={items} key={items.id} />
        ))}
      </Container>
    </>
  );
};

export default Products;
