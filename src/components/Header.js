import React from 'react';
import { Card, Button, Container, Row, Col, Text, Image } from '@nextui-org/react';
import './pages/images/legos.jpg'
import '../styles/Header.css';
import { HeaderBannerImage } from './pages/images';

export default function Header() {

  return (
    <div className="header">
      <Container>
        <Text h1>Patrick F. Ham</Text>
        {/* <Text h3 css={{ justifySelf: 'center'}}>Full-Stack Web Developer</Text> */}
      </Container>
      <img src={HeaderBannerImage} alt="legos"></img>
    </div>
  );
}
