import React from 'react';
import { shallow, mount } from 'enzyme';
import HourCard from '../lib/components/HourCard';

describe('HOUR CARD', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <HourCard
        hour={'10 PM'}
        icon={'sunny'}
        tempF={'88'}
        tempC={'42'}
        />
    );
  });

  it('should render hour', () => {
    const hour = wrapper.find('.hour-card-hour');
    expect(hour.text()).toEqual('10 PM');
  });

  it('should render icon', () => {
    const icon = wrapper.find('.small-icon');
    expect(icon.text()).toEqual('');
  });

  it('should render tempF', () => {
    const tempF = wrapper.find('.hour-card-temp-f');
    expect(tempF.text()).toEqual('88°');
  });

  it('should render tempC', () => {
    const tempC = wrapper.find('.hour-card-temp-c');
    expect(tempC.text()).toEqual('42°');
  });

});
