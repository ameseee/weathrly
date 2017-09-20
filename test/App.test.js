import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';

describe('APP', () => {
  let wrapper;

  describe('localStorage doesnt return something for location', () => {

    global.localStorage = {
      getItem: () => false,
    };

    global.fetch = jest.fn(() => {
      return Promise.resolve({ json: () => {
        Promise.resolve({ });
      },
    });
    });

    beforeEach(() => {
      wrapper = mount(
        <App />
      );
    });

    it('it should render Search component', () => {
      expect(wrapper.find('Search').length).toEqual(1);
    });

  });

  describe('localStorage returns something for location', () => {
    global.localStorage = {
      getItem: () => true,
    };

    beforeEach(() => {
      wrapper = shallow(
        <App />
      );
      wrapper.setState({ data: { zip: '80014' } });
    });

    it('it should render Search component', () => {
      expect(wrapper.find('Search').length).toEqual(1);
    });

    it('it should render Current component', () => {
      expect(wrapper.find('Current').length).toEqual(1);
    });

  });

});
