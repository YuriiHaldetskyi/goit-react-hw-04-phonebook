import React from 'react';
import { Input, Title } from './filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      <Title>Find User</Title>
      <Input value={value} onChange={onChange}></Input>
    </label>
  );
};
