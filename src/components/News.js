import React from 'react';

import styled from 'styled-components';

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
`;

const News = () => {
  return (
    <>
      <Container>Amazing Deals! free shipping on order over $30</Container>
    </>
  );
};

export default News;
