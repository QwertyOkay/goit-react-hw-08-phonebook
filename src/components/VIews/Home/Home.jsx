import React from 'react';
import { Container, Header, MyP } from './styled';

function Home() {
  return (
    <div className="container">
      <Container>
        <Header> Welcome to the Phonebook!</Header>
        <MyP>
         You may store contacts here. 
        Use your own account after the registration.
        This application does not require a subscription, it's completely free and safe. 
        </MyP>
      </Container>
    </div>
  );
}

export default Home;
