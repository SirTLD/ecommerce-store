import { SearchOutlined } from '@material-ui/icons';
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;

  display: flex;
  min-width: 280px;
  height: 350px;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

const Info = styled.div``;

const Icon = styled.div``;

const Image = styled.img`
  flex: 1;
  height: 75%;
`;

const Circle = styled.div``;

const ProductItem = ({ item }) => {
  return (
    <>
      <Container>
        <Circle>
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
        </Circle>
      </Container>
    </>
  );
};

export default ProductItem;
