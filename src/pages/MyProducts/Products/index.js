import React from 'react';
import List from '../Classes/List';
import { Title } from '../Classes/style';

import { Container } from './style';

const data = [
  {
    className: 'Ações',
    balance: 13817.17,
    percentage: 24.46,
    color: 'rgb(76, 48, 155)',
  },
  {
    className: 'FII',
    balance: 12600.96,
    percentage: 22.3,
    color: 'rgb(65, 65, 213)',
  },
  {
    className: 'Renda Fixa Prefixada',
    balance: 12168.13,
    percentage: 21.54,
    color: 'rgb(56, 191, 160)',
  },
  {
    className: 'Tesouro Direto',
    balance: 8123.85,
    percentage: 14.38,
    color: 'rgb(134, 178, 222)',
  },
  {
    className: 'BDR',
    balance: 7521.18,
    percentage: 13.32,
    color: 'rgb(147, 144, 229)',
  },
  {
    className: 'Criptomoeda',
    balance: 2271.53,
    percentage: 4.02,
    color: 'rgb(62, 113, 185)',
  },
];

const Products = () => {
  return (
    <Container>
      <Title>Products</Title>
      <List data={data} />
    </Container>
  );
};

export default Products;
