import React from 'react';
import styled from 'styled-components';

const typeColors = {
  poison: 'purple',
  grass: 'green',
  electric: 'yellow'
}

const ChipContainer = styled.div`
  padding: 2px 5px;
  border-radius: 15px;
  text-align: center;
  width: fit-content;

  background-color: ${props => typeColors[props.pokemonType]}
`;

const TypeChip = (props) => {
  const { name } = props;

  return (
    <ChipContainer pokemonType={name.toLowerCase()}>
      {name}
    </ChipContainer>
  )
};

export default TypeChip;
