import React from 'react';
import TypeChip from './PokemonTypeChip';
import { mount } from 'enzyme';
import 'jest-styled-components';

describe('PokemonTypeChip', () => {
  it('render sin problemas', () => {
    const wrapper = mount(<TypeChip name="grass" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('se muestra el color morado para tipo veneno', () => {
    const wrapper = mount(<TypeChip name="poison" />);
    expect(wrapper).toHaveStyleRule('background-color', 'purple');
  });

  it('se muestra el color verde para tipo hierba', () => {
    const wrapper = mount(<TypeChip name="grass" />);
    expect(wrapper).toHaveStyleRule('background-color', 'green');
  });

  it('se muestra el color amarillo para tipo electrico', () => {
    const wrapper = mount(<TypeChip name="electric" />);
    expect(wrapper).toHaveStyleRule('background-color', 'yellow');
  });
});