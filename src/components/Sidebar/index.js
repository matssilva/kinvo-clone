import React from 'react';
import { IconContainer } from '../Navbar/style';
import { SidebarItem, SidebarText, SidebarContainer, SidebarIcon } from './style';
import icons from '../../assets/sprite.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <ul>
        <SidebarItem>
          <IconContainer>
            <svg>
              <use href={icons + '#list'} />
            </svg>
          </IconContainer>
          <SidebarText>Gerenciamento de Produtos</SidebarText>
          <SidebarIcon>
            <use href={icons + '#chevron-right'} />
          </SidebarIcon>
        </SidebarItem>
        <SidebarItem>
          <IconContainer>
            <svg>
              <use href={icons + '#target'} />
            </svg>
          </IconContainer>
          <SidebarText>Resumo da Carteira</SidebarText>
          <SidebarIcon>
            <use href={icons + '#chevron-right'} />
          </SidebarIcon>
        </SidebarItem>
        <SidebarItem>
          <IconContainer>
            <svg>
              <use href={icons + '#refresh-ccw'} />
            </svg>
          </IconContainer>
          <SidebarText>Acompanhamento Ao Vivo</SidebarText>
          <SidebarIcon>
            <use href={icons + '#chevron-right'} />
          </SidebarIcon>
        </SidebarItem>
        <Link to="/myProducts">
          <SidebarItem>
            <IconContainer>
              <svg>
                <use href={icons + '#pie-chart'} />
              </svg>
            </IconContainer>
            <SidebarText>Meus Produtos</SidebarText>
            <SidebarIcon>
              <use href={icons + '#chevron-right'} />
            </SidebarIcon>
          </SidebarItem>
        </Link>

        <SidebarItem>
          <IconContainer>
            <svg>
              <use href={icons + '#star (1)'} />
            </svg>
          </IconContainer>
          <SidebarText>Rentabilidade Geral</SidebarText>
          <SidebarIcon>
            <use href={icons + '#chevron-right'} />
          </SidebarIcon>
        </SidebarItem>
        <SidebarItem>
          <IconContainer>
            <svg>
              <use href={icons + '#dollar-sign'} />
            </svg>
          </IconContainer>
          <SidebarText>Meus Proventos</SidebarText>
          <SidebarIcon>
            <use href={icons + '#chevron-right'} />
          </SidebarIcon>
        </SidebarItem>
        <SidebarItem>
          <IconContainer>
            <svg>
              <use href={icons + '#layers'} />
            </svg>
          </IconContainer>
          <SidebarText>Classes de Ativos</SidebarText>
          <SidebarIcon>
            <use href={icons + '#chevron-right'} />
          </SidebarIcon>
        </SidebarItem>
        <SidebarItem>
          <IconContainer>
            <svg>
              <use href={icons + '#monitor'} />
            </svg>
          </IconContainer>
          <SidebarText>Projeção da Carteira</SidebarText>
          <SidebarIcon>
            <use href={icons + '#chevron-right'} />
          </SidebarIcon>
        </SidebarItem>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
