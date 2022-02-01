import React from 'react';
import Classes from './Classes';
import Institutions from './Institutions';
import Products from './Products';
import { Main, MainContent, Title } from './style';

// import { Container } from './styles';

const MyProducts = () => {
  return (
    <Main>
      <Title>Meus Produtos</Title>
      <MainContent>
        <Classes />
        <Products />
        <Institutions />
      </MainContent>
    </Main>
  );
};

export default MyProducts;
