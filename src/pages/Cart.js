import React from 'react';
import Navbar from '../components/Navbar';

import styled from 'styled-components';
import News from '../components/News';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

const TopButton = styled.button`
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
  text-transform: capitalize;
`;

const TopTexts = styled.div``;
const TopTextItems = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 0.8rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 0.2rem;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.1rem solid lightgray;
  padding: 2rem;
  border-radius: 1rem;
  height: 50vh;
`;

const SummaryTitle = styled.h1``;
const SummaryItem = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '2rem'};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: black;
  color: white;
  font-size: 1.1rem;
  text-transform: uppercase;
  border: none;
`;

// --------------------------------

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 35rem;
`;

const Details = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;

const ProductColor = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;
const PriceDetail = styled.span`
  display: flex;
  align-items: center;
  justify-contents: center;
  flex-direction: column;
  flex: 1;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
const ProductAmount = styled.div`
  font-size: 2rem;
  margin: 0.5rem;
`;
const ProductPrice = styled.div`
  font-size: 2.6rem;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <>
      <Container>
        <Navbar />
        <News />
        <Wrapper>
          <Title>your cart</Title>
          <Top>
            <TopButton>continue shopping</TopButton>
            <TopTexts>
              <TopTextItems>shopping bag(2)</TopTextItems>
              <TopTextItems>your wishlist</TopTextItems>
            </TopTexts>

            <TopButton type="filled">checkout now</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1131&q=80" />
                  <Details>
                    <ProductName>
                      <b style={{ marginRight: '.5rem' }}>Product:</b>Stylish
                      Jackets
                    </ProductName>
                    <ProductId>
                      <b style={{ marginRight: '.5rem' }}>ID:</b>2331453423
                    </ProductId>
                    <ProductColor color="black" />
                    <ProductSize>
                      <b style={{ marginRight: '.5rem' }}>Size:</b>40
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$30</ProductPrice>
                </PriceDetail>
              </Product>

              <Hr />

              <Product>
                <ProductDetail>
                  <Image src="https://images.unsplash.com/photo-1620231109648-302d034cb29b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                  <Details>
                    <ProductName>
                      <b style={{ marginRight: '.5rem' }}>Product:</b>Stylish
                      Jackets
                    </ProductName>
                    <ProductId>
                      <b style={{ marginRight: '.5rem' }}>ID:</b>2331453423
                    </ProductId>
                    <ProductColor color="blue" />
                    <ProductSize>
                      <b style={{ marginRight: '.5rem' }}>Size:</b>40
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$30</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>Order Summary </SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$40</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$4.99</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>-$4.99</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>-$40</SummaryItemPrice>
              </SummaryItem>

              <Button>Purchase Now</Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Cart;
