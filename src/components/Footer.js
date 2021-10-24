import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
  YouTube,
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  flex: 1;
`;
const Center = styled.div`
  padding: 2rem;
  flex: 1;
`;

const Title = styled.h3`
  margin-bottom: 2rem;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const Right = styled.div`
  padding: 2rem;
  flex: 1;
`;

const ContactItem = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
`;

// -------------------------------
const Brand = styled.h1`
  font-weight: bold;
  color: #005691;
  font-size: 2rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;
const Description = styled.p`
  margin: 1rem 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcons = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  background-color: #005691;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.8rem;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Left>
          <Brand>Shoppery</Brand>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            eligendi modi minima? Ex obcaecati sint nesciunt nemo eius quibusdam
            error!
          </Description>
          <SocialContainer>
            <SocialIcons>
              <Facebook />
            </SocialIcons>
            <SocialIcons>
              <Instagram />
            </SocialIcons>
            <SocialIcons>
              <Twitter />
            </SocialIcons>
            <SocialIcons>
              <YouTube />
            </SocialIcons>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Other Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Women's Fashion</ListItem>
            <ListItem>Men's Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms & Conditions</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ color: '#005691', marginRight: '0.6rem' }} /> 245 Ita
            Drive, Somewhere NJ 01000
          </ContactItem>
          <ContactItem>
            <Phone style={{ color: '#005691', marginRight: '0.6rem' }} /> + 1
            234 456 7890
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ color: '#005691', marginRight: '0.6rem' }} />
            info@shoppery.com
          </ContactItem>
          <ContactItem></ContactItem>
        </Right>
      </Container>
    </>
  );
};

export default Footer;
