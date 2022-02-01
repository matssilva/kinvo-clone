import styled from 'styled-components';

export const Main = styled.main`
  padding: 20px;
  width: 100%;
`;

export const Title = styled.header`
  font-size: 16px;
  line-height: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: rgb(112, 123, 129);
`;

export const MainContent = styled.main`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  grid-gap: 10px;
`;
