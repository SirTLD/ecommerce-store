import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  flex: 1;
  margin: 0.5rem;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: '50vh' })}
`;
const Info = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  ${mobile({ fontSize: '2rem' })}
`;
const Button = styled.button`
  text-transform: uppercase;
  padding: 1rem;
  font-size: 1.4rem;
  background-color: white;
  cursor: pointer;
  color: #005691;
  border: none;
  border-radius: 1rem;
  letter-spacing: 0.1rem;
  transition: 0.5s ease;
  ${mobile({ fontSize: '1rem' })}

  &:hover {
    background-color: #005691;
    color: white;
    border: none;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <>
      <Container>
        <Link to={`/products/${item.category}`}>
          <Image src={item.img} />
          <Info>
            <Title>{item.title}</Title>
            <Button>Shop now</Button>
          </Info>
        </Link>
      </Container>
    </>
  );
};

export default CategoryItem;
