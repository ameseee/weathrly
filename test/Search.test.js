import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/components/Search';
import App from '../lib/App';
const Trie = require('../lib/HelperFiles/Trie');


describe('SEARCH', () => {

  it('should render the search bar when displaying weather report', () => {
    const component = shallow(<Search />);
    expect(component.find('.search-input')).toBeDefined();
  });

  it('should change state when user inputs', () => {
    const component = shallow(<Search />);

    component.setState({ trie: { suggest: () => { return ['', '', '', '', '', '', '']; } } });

    expect(component.find('.search-input').text()).toEqual('');
    expect(component.state('searchInput')).toEqual('');
    component.find('.search-input').simulate('change', { target: { value: 'las' } });
    expect(component.state('searchInput')).toEqual('las');
  });

  it('call a function on click', () => {
    const mockFn = jest.fn();
    const component = mount(<Search
      fetchDataStateCity={mockFn}
      fetchDataZipCode={mockFn} />);
    const btn = component.find('.search-btn');
    const instance = component.instance();
    const spy = jest.spyOn(instance, 'handleSearchClick');

    btn.simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);

    btn.simulate('click');
    btn.simulate('click');
    btn.simulate('click');
    expect(spy).toHaveBeenCalledTimes(4);
  });

});
