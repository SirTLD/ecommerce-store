import { Add, Remove } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import News from '../components/News';
import NewsLetter from '../components/NewsLetter';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import axios from 'axios';

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
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'decrease') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {};

  return (
    <>
      <Container>
        <Navbar />
        <News />
        <Wrapper>
          <ImgContainer>
            <Image src={product.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Description>{product.description}</Description>
            <Price>{product.price}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                {product.colors?.map((color) => (
                  <FilterColor
                    color={color}
                    key={color}
                    onClick={() => setColor(color)}
                  />
                ))}
              </Filter>

              <Filter>
                <FilterTitle>Size:</FilterTitle>
                <FilterSize onChange={(e) => setSize(e.target.value)}>
                  {product.sizes?.map((size) => (
                    <FilterSizeOption key={size}>{size}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove onClick={() => handleQuantity('decrease')} />
                <Amount>{quantity}</Amount>
                <Add onClick={() => handleQuantity('increase')} />
              </AmountContainer>
              <Button onClick={handleClick}>add to cart</Button>
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
