import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { productItems } from './Data';
import ProductItem from './ProductItem';
import { mobile } from '../responsive';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ padding: '0', width: '100vw' })}
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : 'http://localhost:5000/api/products'
        );
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === 'New Arrivals') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
      <Container>
        {category
          ? filteredProducts.map((item) => (
              <ProductItem item={item} key={item.id} />
            ))
          : products
              .slice(0, 8)
              .map((item) => <ProductItem item={item} key={item.id} />)}
      </Container>
    </>
  );
};

export default Products;
