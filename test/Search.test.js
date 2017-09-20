import React from 'react';
import { shallow, mount } from 'enzyme';
import Current from '../lib/components/Current';
import Welcome from '../lib/components/Welcome';
import App from '../lib/App';

describe('SEARCH', () => {

//this should be in APP
  it('should render the search bar when displaying weather report', () => {
    const component = mount(<App />);
    const current = component.find('.search-div');
    console.log(component.debug());
    expect(current.nodes.length).toEqual(1);
  });

});
