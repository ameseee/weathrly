import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/components/SevenHour';

describe('SEVEN HOUR', () => {
  let wrapper;

  it('should render multiple hour weather cards', () => {
    wrapper = mount(
      <SevenHour
        hourlyTime={ ['9 PM', '10 PM'] }
        hourlyTempF={[ '82', '84' ]}
        hourlyTempC={[ '28', '29' ]}
        hourlyIcon={['sunny', 'haze']}
      /> );
      const cards = wrapper.find('HourCard').length
      expect(cards).toEqual(2);
  });
});
