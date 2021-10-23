import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from '@material-ui/icons';
import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #e8f1f5;
  position: relative;
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

  &:hover {
    background-color: #005691;
  }
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img``;

const InfoContainer = styled.div`
  flex: 1;
`;

const Slider = () => {
  return (
    <>
      <Container>
        <Arrow direction="left">
          <ArrowBackIosOutlined style={{ fontSize: 'large' }} />
        </Arrow>
        <Wrapper></Wrapper>
        <Arrow direction="right">
          <ArrowForwardIosOutlined />
        </Arrow>
      </Container>
    </>
  );
};

export default Slider;
