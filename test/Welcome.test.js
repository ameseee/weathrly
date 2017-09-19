import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/components/Welcome';

describe('WELCOME PAGE', () => {

  it('should render "welcome"', () => {
    const component = shallow(<Welcome />);
    const greeting = component.find('h2');
    expect(greeting.text()).toEqual('welcome');
  });

  it('should render the search bar', () => {
    const component = mount(<Welcome />);
    const searchBar = component.find('input.search-bar');
    expect(searchBar).toHaveLength(1);
  });
});
