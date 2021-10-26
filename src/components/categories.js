import React from 'react';

import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { categories } from './Data';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  ${mobile({ padding: 0, flexDirection: 'column' })}
`;

const Categories = () => {
  return (
    <>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
