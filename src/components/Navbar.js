import { Badge } from '@material-ui/core';
import {
  Search,
  ShoppingCartOutlined,
  StorefrontOutlined,
} from '@material-ui/icons';

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${'' /* border: 0.1rem solid black; */}
`;

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftItems = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 1rem;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.1rem solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  padding: 0.5rem;
`;

const Input = styled.input`
  border: none;
`;
// ---------------------------

const CenterItems = styled.div`
  flex: 1;
  text-align: center;
`;

const Brand = styled.h1`
  font-weight: bold;
  color: #005691;
  font-size: 2rem;
  cursor: pointer;
`;

// -------------------------------

const RightItems = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 1rem;
  cursor: pointer;
  margin: 0 0.8rem;
  text-transform: uppercase;
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <LeftItems>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search
                style={{ color: 'gray', fontSize: 24, cursor: 'pointer' }}
              ></Search>
            </SearchContainer>
          </LeftItems>
          <CenterItems>
            <Brand>
              <StorefrontOutlined style={{ fontSize: 28 }} />
              Shoppery
            </Brand>
          </CenterItems>
          <RightItems>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
              <Badge badgeContent={3} color="primary">
                <ShoppingCartOutlined></ShoppingCartOutlined>
              </Badge>
            </MenuItem>
          </RightItems>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
