import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 50vh;
  background-color: #eae7d9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0.8rem;
`;
const Description = styled.div`
  font-size: 2rem;
  font-weight: 300;
`;
const InputContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 3rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 0.1rem solid lightgray;
`;
const Input = styled.input`
  padding-left: 1rem;
  flex: 8;
  border: none;

  font-size: 1rem;
`;
const Button = styled.button`
  flex: 1;
  background-color: #005691;
  border: none;

  cursor: pointer;
`;

const NewsLetter = () => {
  return (
    <>
      <Container>
        <Title>Newsletter</Title>
        <Description>
          Get alerts for all your favorite items.
          <InputContainer>
            <Input placeholder="Enter Email" />
            <Button>
              <Send style={{ color: 'white' }} />
            </Button>
          </InputContainer>
        </Description>
      </Container>
    </>
  );
};

export default NewsLetter;
