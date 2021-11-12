import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';

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
  &:disabled {
    color: green;
    cursor: not-allowed;
  }

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

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <Input placeholder="Confirm Password" type="password" /> */}

            <Button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </Button>
            {error && <Error>Opps! went wrong</Error>}
            <Link>FORGOT PASSWORD</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
