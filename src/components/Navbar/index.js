import React from 'react';
import { NavbarContainer, Logo, Content, LogoContainer } from './style';
import LogoImage from '../../assets/images/logo.svg';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <a>
          <Logo src={LogoImage} />
        </a>
      </LogoContainer>
      <Content>
        <div>
          <NavbarItem upText={'Saldo Bruto'} downText={'56.509,22'} iconName={'#award'} />
          <NavbarItem
            upText={'Valor Aplicado'}
            downText={'59.047,62'}
            iconName={'#arrow-up'}
          />
          <NavbarItem
            upText={'Rentabilidade'}
            downText={'-25,20%'}
            iconName={'#trending-up'}
          />
        </div>
        <div>
          <NavbarItem
            upText={'Carteira'}
            downText={'Matheus'}
            iconName={'#chevron-down'}
            containerColor="purple"
          />
          <NavbarItem
            upText={'Gerenciar'}
            downText={'Conexões'}
            iconName={'#shuffle'}
            containerColor="purple"
          />
          <NavbarItem
            upText={''}
            downText={''}
            iconName={'#menu'}
            containerColor="purple"
          />
        </div>
      </Content>
    </NavbarContainer>
  );
};

export default Navbar;
