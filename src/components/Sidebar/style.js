import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 150px;
  background-color: white;
  height: 89%;
`;

export const SidebarItem = styled.li`
  min-height: 50px;
  display: flex;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  border-bottom: 1px solid rgba(204, 207, 209, 0.35);

  &:hover {
    cursor: pointer;
  }
`;

export const SidebarText = styled.span`
  font-size: 10px;
  line-height: 11px;
  font-weight: 500;
  color: rgb(112, 123, 129);
  margin-left: 10px;
  margin-right: auto;
  font-family: inherit;
`;

export const SidebarIcon = styled.svg`
  height: 10px;
  width: 10px;
  color: rgb(112, 123, 129);
`;
