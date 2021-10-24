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
  border-radius: 1rem;
`;

const Input = styled.input`
  border: none;
  height: 1.4rem;
  border-radius: 1rem;
`;
// ---------------------------

const CenterItems = styled.div`
  flex: 5;
  text-align: left;
`;

const Brand = styled.h1`
  font-weight: bold;
  color: #005691;
  font-size: 2rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
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
          <CenterItems>
            <Brand>Shoppery</Brand>
          </CenterItems>
          <LeftItems>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search
                style={{ color: 'gray', fontSize: 24, cursor: 'pointer' }}
              ></Search>
            </SearchContainer>
          </LeftItems>

          <RightItems>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
              <Badge badgeContent={3} color="primary">
                <ShoppingCartOutlined
                  style={{ fontSize: 32 }}
                ></ShoppingCartOutlined>
              </Badge>
            </MenuItem>
          </RightItems>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
