import styled from 'styled-components';

export const ClassesList = styled.ul`
  width: 50%;

  & li:not(:first-child) {
    margin-top: 5px;
  }
`;

export const ClassItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(214, 217, 221);
  align-items: center;
  padding: 5px 10px 5px 10px;

  & > div.barColor {
    position: absolute;
    background-color: ${({ color }) => color};
    height: 80%;
    width: 4px;
    top: 0;
    left: 0;
    border-radius: 3px;
  }
`;

export const Balance = styled.div`
  display: flex;
  flex-direction: column;

  & span.type {
    text-transform: uppercase;
    font-size: 8px;
    font-weight: bold;
    color: rgb(112, 123, 129);
  }

  & span.text {
    font-size: 4px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(112, 123, 129);
  }

  & span.balance {
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
    text-transform: uppercase;
    color: ${({ color }) => color};
  }
`;

export const Percentage = styled.div`
  display: flex;
  flex-direction: column;

  & span.text {
    font-size: 4px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(112, 123, 129);
  }

  & span.percentage {
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
    text-transform: uppercase;
    color: ${({ color }) => color};
  }
`;
