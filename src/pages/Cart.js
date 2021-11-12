import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

import styled from 'styled-components';
import News from '../components/News';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../requestMethods';
import { useHistory } from 'react-router';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 2rem;
  ${mobile({
    padding: '0.5rem',
  })}
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

const TopTexts = styled.div`
  ${mobile({
    display: 'none',
  })}
`;
const TopTextItems = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 0.8rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: 'column',
  })}
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
  ${mobile({
    flexDirection: 'column',
  })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 35rem;
  ${mobile({
    width: '13rem',
    height: '13rem',
    objectFit: 'cover',
  })}
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
  ${mobile({
    width: '1.2rem',
    height: '1.2rem',
  })}
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
  margin: 1rem 0;
`;
const ProductAmount = styled.div`
  font-size: 2rem;
  margin: 0.5rem;
  ${mobile({
    margin: '0.5rem 1.2rem',
  })}
`;
const ProductPrice = styled.div`
  font-size: 2.6rem;
  font-weight: 600;
  ${mobile({
    marginBottom: '1rem',
  })}
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = React.useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  // Stripe.setPublishableKey(KEY);

  console.log(stripeToken);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push('/success', { data: res.data });
      } catch (error) {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  return (
    <>
      <Container>
        <Navbar />
        <News />
        <Wrapper>
          <Title>Your Cart</Title>
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
              {cart.products.map((product) => (
                <Product>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b style={{ marginRight: '.5rem' }}>Product:</b>
                        {product.title}
                      </ProductName>
                      <ProductId>
                        <b style={{ marginRight: '.5rem' }}>ID:</b>
                        {product._id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b style={{ marginRight: '.5rem' }}>Size:</b>
                        {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>
                      $ {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
              ))}

              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>Order Summary </SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
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

              <StripeCheckout
                name="Shoppery"
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <Button>Purchase Now</Button>
              </StripeCheckout>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Cart;
