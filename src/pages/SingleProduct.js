import { Add, Remove } from '@material-ui/icons';
import React from 'react';

import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import News from '../components/News';
import NewsLetter from '../components/NewsLetter';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 3rem;
  ${mobile({
    padding: '2rem .5rem',
    flexDirection: 'column',
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  ${mobile({
    height: '50vh',
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 3rem;
  ${mobile({
    padding: '0 .5rem',
  })}
`;
const Title = styled.h1``;
const Description = styled.p`
  margin: 1rem 0;
`;
const Price = styled.span`
  font-size: 3rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
  margin: 2rem 0;
  ${mobile({
    width: '100%',
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 1.2rem;
  margin-right: 0.6rem;
`;

const FilterColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 0.4rem;
  cursor: pointer;
  ${mobile({
    width: '1.2rem',
    height: '1.2rem',
    margin: '0 0.2rem',
  })}
`;
const FilterSize = styled.select`
  border: 0.1rem solid lightgray;
  padding: 0.6rem;
  text-align: center;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-between;
  ${mobile({
    width: '100%',
  })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Amount = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.4rem;
`;

const Button = styled.button`
  text-transform: uppercase;
  padding: 0.8rem;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  color: #005691;
  border: 0.2rem solid #005691;
  border-radius: 1rem;
  transition: all 0.5s ease;
  font-weight: 500;

  &:hover {
    background-color: #005691;
    color: white;
  }
`;

const SingleProduct = () => {
  return (
    <>
      <Container>
        <Navbar />
        <News />
        <Wrapper>
          <ImgContainer>
            <Image src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
          </ImgContainer>
          <InfoContainer>
            <Title>Suit</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              est, similique amet suscipit exercitationem eius dolore porro
              voluptatibus voluptas excepturi!
            </Description>
            <Price>$50</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="red" />
                <FilterColor color="yellow" />
              </Filter>

              <Filter>
                <FilterTitle>Size:</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                  <FilterSizeOption>XXL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>add to cart</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <NewsLetter />
        <Footer />
      </Container>
    </>
  );
};

export default SingleProduct;
