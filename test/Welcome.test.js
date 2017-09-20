import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/components/Welcome';

describe('WELCOME PAGE', () => {

  it('should render "welcome"', () => {
    const component = shallow(<Welcome />);
    const greeting = component.find('.welcome-weathrly');
    expect(greeting.text()).toEqual('weathrly');
  });

  it('should render search bar', () => {
    const component = mount(<Welcome />);
    const current = component.find('.search-div');
    expect(current.nodes.length).toEqual(1);
  });

});
