import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { sliderInfo } from './Data';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #e8f1f5;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${(props) => props.direction === 'left' && '1rem'};
  right: ${(props) => props.direction === 'right' && '1rem'};
  cursor: pointer;
  opacity: 0.9;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 5;

  &:hover {
    background-color: #005691;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  margin: 5% 15%;
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 3rem;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 4rem;
`;
const Description = styled.p`
  margin: 2rem 0;
  text-transform: uppercase;
  font-weight: 500px;
  font-size: 1.6rem;
  letter-spacing: 0.3rem;
  width: 80%;
`;
const Button = styled.button`
  text-transform: uppercase;
  padding: 1rem;
  font-size: 1.4rem;
  background-color: transparent;
  cursor: pointer;
  color: #005691;
  border: 0.1rem solid #005691;
  border-radius: 1rem;
  letter-spacing: 0.1rem;
  transition: 0.5s ease;

  &:hover {
    background-color: #005691;
    color: white;
    border: none;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <Container>
        <Arrow direction="left" onClick={() => handleClick('left')}>
          <ArrowBackIosOutlined style={{ fontSize: 'large' }} />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderInfo.map((item) => (
            <Slide bg={item.bg}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Button>{item.button}</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick('right')}>
          <ArrowForwardIosOutlined />
        </Arrow>
      </Container>
    </>
  );
};

export default Slider;
