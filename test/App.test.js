import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';

describe('APP', () => {

  it('should render', () => {
      const wrapper = shallow(<App />);
      const current = wrapper.find('Current');

      expect(current.length).toBe(1)
  });

  it('should start with a state of data: null', () => {
    let fetchMock = () => {

    }

    const wrapper = shallow(<App />);

    expect(wrapper.state()).toEqual({data: null})

  });
});
