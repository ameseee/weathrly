import React from 'react';
import { shallow, mount } from 'enzyme';
import Current from '../lib/components/Current';
import Welcome from '../lib/components/Welcome';
import App from '../lib/App';

describe('SEARCH', () => {

//this test should be in welcome
  it('should render search bar in Welcome', () => {
    const component = mount(<Welcome />);
    const current = component.find('.search-div');
    expect(current.nodes.length).toEqual(1);
  });

//this should be in APP
  it('should render the search bar when displaying weather report', () => {
    const component = mount(<App />);
    const current = component.find('.search-div');
    console.log(component.debug());
    expect(current.nodes.length).toEqual(1);
  });

});
