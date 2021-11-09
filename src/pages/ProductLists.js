import React, { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import News from '../components/News';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = styled.div``;
const Title = styled.h1`
  margin: 2rem;
  ${mobile({
    margin: '1rem .5rem',
  })}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Filter = styled.div`
  margin: 2rem;
  ${mobile({
    margin: '0.1rem .5rem',
    display: 'flex',
    flexDirection: 'column',
  })}
`;

const FilterText = styled.span`
  font-size: 1.8rem;
  font-weigth: 600;
  margin-right: 0.6rem;
  ${mobile({
    marginRight: '0rem',
    fontSize: '1rem',
  })}
`;

const Select = styled.select`
  padding: 0.6rem;
  margin-right: 0.6rem;
  border: 0.05rem solid lightgray;
  text-align: center;
  ${mobile({
    margin: '.2rem 0',
  })}
`;
const Option = styled.option`
  text-align: center;
`;

const ProductLists = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('New Arrivals');

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <>
      <Container>
        <Navbar />
        <News />
        <Title>{category}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products: </FilterText>
            <Select name="style" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option>Blue</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Gray</Option>
              <Option>White</Option>
            </Select>

            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <Option value="New Arrivals">New Arrivals</Option>
              <Option value="High">Price (High)</Option>
              <Option value="Low">Price (Low)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products category={category} filters={filters} sort={sort} />
        <NewsLetter />
        <Footer />
      </Container>
    </>
  );
};

export default ProductLists;
