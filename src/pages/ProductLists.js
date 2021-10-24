import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import News from '../components/News';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';

const Container = styled.div``;
const Title = styled.h1`
  margin: 2rem;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Filter = styled.div`
  margin: 2rem;
`;

const FilterText = styled.span`
  font-size: 1.8rem;
  font-weigth: 600;
  margin-right: 0.6rem;
`;

const Select = styled.select`
  padding: 0.6rem;
  margin-right: 0.6rem;
  border: 0.1rem solid #005691;
  text-align: center;
`;
const Option = styled.option`
  text-align: center;
`;

const ProductLists = () => {
  return (
    <>
      <Container>
        <Navbar />
        <News />
        <Title>Outfits</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products: </FilterText>
            <Select>
              <Option disabled selected>
                Style
              </Option>
              <Option>Suit</Option>
              <Option>Black</Option>
              <Option>Shirt</Option>
              <Option>Dress</Option>
              <Option>Shoe</Option>
            </Select>

            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
              <Option disabled selected>
                New Arrivals
              </Option>
              <Option>$5 - $25</Option>
              <Option>$5 - $75</Option>
              <Option>$75 - $150</Option>
              <Option>$75 - $250</Option>
              <Option>Over $250</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <NewsLetter />
        <Footer />
      </Container>
    </>
  );
};

export default ProductLists;
