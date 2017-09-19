import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/components/Search';

describe('SEARCH', () => {

  it('should render search bar in Welcome', () => {
    const component = mount(<Welcome />);

  });

  it('should render the search bar when displaying weather report', () => {
    const component = mount(<Current />);

  });
});
