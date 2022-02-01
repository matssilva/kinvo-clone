import React from 'react';
import icons from '../../../assets/sprite.svg';
import { ContentItem, IconContainer, TextContainer } from '../style';

const NavbarItem = ({ upText, downText, iconName, containerColor }) => {
  return (
    <ContentItem>
      <IconContainer containerColor={containerColor}>
        <svg>
          <use href={icons + iconName} />
        </svg>
      </IconContainer>
      <TextContainer>
        <span>{upText}</span>
        <span>{downText}</span>
      </TextContainer>
    </ContentItem>
  );
};

export default NavbarItem;
