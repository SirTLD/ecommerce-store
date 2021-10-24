import React from 'react';

import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { categories } from './Data';

const Container = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
