import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 355, 255, 0.5)
    ),
    url('https://images.unsplash.com/photo-1515023677547-593d7638cbd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80')
      center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 2rem;
  width: 20%;
  background-color: white;
  border-radius: 1rem;
  ${mobile({ width: '70%' })}
`;

const Title = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  height: 2rem;
  width: 100%;
  padding-left: 0.8rem;

  border: 0.1rem solid lightgray;
`;

const Button = styled.button`
  margin: 1rem 0;
  text-transform: uppercase;
  padding: 0.8rem 4rem;
  font-size: 1rem;
  background-color: #005691;
  cursor: pointer;
  color: white;
  border: 0.2rem solid #005691;
  border-radius: 1rem;
  transition: all 0.5s ease;
  font-weight: 500;

  &:hover {
    background-color: #005691;
    color: white;
  }
`;

const Link = styled.a`
  margin: 0.5rem 0;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Confirm Password" type="password" />

            <Button>LOGIN</Button>
            <Link>FORGOT PASSWORD</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
