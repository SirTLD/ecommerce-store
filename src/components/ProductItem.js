import { SearchOutlined } from '@material-ui/icons';
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Info = styled.div`
  opacity: 0;
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 0.5rem;
  min-width: 25rem;
  min-height: 25rem;
  background-color: rgba(220, 240, 240, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${mobile({ width: '40%', height: '18rem', margin: '.5rem 0.5rem' })}

  &:hover {
    ${Info} {
      opacity: 1;
    }
  }
`;

const Icon = styled.div`
  cursor: pointer;
  background-color: white;
  width: 3rem;
  height: 3rem;
  margin: 0.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;

  &:hover {
    background-color: #005691;
    color: white;
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  object-fit: cover;
  max-width: 100%;
  height: auto;
  z-index: 2;
  ${mobile({
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
  })}
`;

const ProductItem = ({ item }) => {
  return (
    <>
      <Container>
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    </>
  );
};

export default ProductItem;
