import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDayCard from '../lib/components/TenDayCard';

describe('TEN DAY CARD', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TenDayCard
        day={'MON'}
        icon={'sunny'}
        highF={'88'}
        lowF={'44'}
        highC={'22'}
        lowC={'11'}
      />
    );
  });

  it('should render day abbreviation', () => {
    const day = wrapper.find('.ten-day-card-day');
    expect(day.text()).toEqual('MON');
  });

  it('should render icon', () => {
    const icon = wrapper.find('.small-icon');
    expect(icon.text()).toEqual('');
  });

  it('should render high and low in fahrenheit', () => {
    const highAndLow = wrapper.find('.card-lo-hi-f');
    expect(highAndLow.text()).toEqual('44° | 88°');
  });

  it('should render high and low in celsius', () => {
    const highAndLow = wrapper.find('.card-lo-hi-c');
    expect(highAndLow.text()).toEqual('11° | 22°');
  });

});
