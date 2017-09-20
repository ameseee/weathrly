import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/components/TenDay';

describe('TEN DAY', () => {
  let wrapper;

  it('should render day weather cards', () => {
    wrapper = mount(
      <TenDay
        tenDayDay={['MON', 'TUE']}
        tenDayHighF={['82', '84']}
        tenDayLowF={['58', '48']}
        tenDayHighC={['28', '29']}
        tenDayLowC={['14', '9']}
        tenDayIcon={['clear', 'partlycloudy']}
      />);
    const cards = wrapper.find('TenDayCard').length;
    expect(cards).toEqual(2);
  });

});
