import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Link } from './Link';

describe('The Link component', () => {
  it('renders an Anchor element', () => {
    const wrapper = shallow(
      <Link title="My link test" source="www.github.com/kostaslib">
        My profile
      </Link>,
    );
    const tree = shallowToJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
