/**
 * Created by andrew on 3/22/16.
 */
import React from 'react';

export const moneyText = (amount) => {

  if (Number.isNaN(Number(amount))) {
    return '—';
  }
  const absNum = Math.abs(Number(amount) / 100);
  if (absNum < 0) {
    return `$(${absNum.toFixed(2)})`;
  }
  return `$${absNum.toFixed(2)}`;
};

export const Money = ({ amount }) => {

  if (Number.isNaN(Number(amount))) {
    return (<span />);
  }
  const absNum = Math.abs(Number(amount) / 100);
  if (absNum < 0) {
    return (<span className="text-danger">($${ absNum.toFixed(2) })</span>)
  }
  return (<span>${ absNum.toFixed(2) }</span>);
};