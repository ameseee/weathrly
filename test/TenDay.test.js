import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/components/TenDay';
import App from '../lib/App';
import testData from './80014';

describe('TEN DAY', () => {

  it('should render 10 day cards', () => {
    let component = mount(<App dayCards={} />);
    const cards = component.find('div.weather-card');
    expect(cards).toHaveLength(10);
  });

});
