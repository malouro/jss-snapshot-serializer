import React from 'react';
import { mount } from 'enzyme';
import MockButton from './mock-components/MockButton';

describe('Mount Rendering', () => {
  test('serializes `react-jss` component', () => {
    const wrapper = mount(<MockButton />);

    expect(wrapper).toMatchSnapshot();
  });
});
