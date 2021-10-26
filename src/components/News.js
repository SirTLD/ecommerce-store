import React from 'react';

import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 3rem;
  background-color: orange;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: capitalize;
  ${mobile({ fontSize: '1rem' })}
`;

const News = () => {
  return (
    <>
      <Container>Free shipping and delivery over $30</Container>
    </>
  );
};

export default News;
