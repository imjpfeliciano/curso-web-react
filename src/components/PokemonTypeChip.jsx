import React from 'react';
import styled from 'styled-components';

const ChipContainer = styled.div`
  background-color: aqua;
  padding: 2px 5px;
  border-radius: 15px;
  text-align: center;
  width: fit-content;
`;

const TypeChip = (props) => {
  const { name } = props;

  return (
    <ChipContainer>
      {name}
    </ChipContainer>
  )
};

export default TypeChip;
