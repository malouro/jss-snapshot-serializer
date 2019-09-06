import React from 'react';
import { shallow } from 'enzyme';
import MockButton from './mock-components/MockButton';

describe('Shallow Rendering', () => {
  test('serializes `react-jss` component', () => {
    const wrapper = shallow(<MockButton />);

    expect(wrapper).toMatchSnapshot();
  });
});
