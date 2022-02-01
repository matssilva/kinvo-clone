import React from 'react';
import { Balance, ClassesList, Percentage, ClassItem } from './style';

const List = ({ data }) => {
  return (
    <ClassesList>
      {data.map((item, index) => (
        <ClassItem key={index} color={item.color}>
          <div className="barColor"></div>
          <Balance color={item.color}>
            <span className="type">{item.className}</span>
            <span className="text">Saldo na classe</span>
            <span className="balance">R$ {item.balance}</span>
          </Balance>
          <Percentage color={item.color}>
            <span className="text">% carteira</span>
            <span className="percentage">{item.percentage}</span>
          </Percentage>
        </ClassItem>
      ))}
    </ClassesList>
  );
};

export default List;
