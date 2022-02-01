import styled from 'styled-components';

export const Logo = styled.img`
  max-width: 100px;
  height: 100%;
`;

export const LogoContainer = styled.div`
  height: 30%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  & > div:first-child {
    border-left: 1px solid rgb(218, 224, 227);
  }

  & > div {
    height: 38px;
    display: flex;
    align-items: center;
    gap: 15px;
    margin-left: 20px;

    padding-left: 30px;
    padding-right: 40px;
  }
`;

export const ContentItem = styled.div`
  display: flex;
  align-items: center;

  & span:nth-child(1) {
    font-size: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgb(98, 113, 121);
  }

  & span:nth-child(2) {
    font-size: 11px;
    line-height: 19px;
    font-weight: bold;
    color: rgb(98, 113, 121);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const IconContainer = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${({ containerColor, theme }) =>
    containerColor ? theme[containerColor] : theme['grey']};
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 10px;
    height: 10px;
    color: white;
  }
`;

export const NavbarContainer = styled.nav`
  height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  padding-left: 15px;
  box-shadow: rgb(112 113 129 / 8%) 0px 7px 20px;
`;
