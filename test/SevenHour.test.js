import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/components/SevenHour';
import App from '../lib/App';
import testData from './80014';

describe('SEVEN HOUR', () => {

  it('should render seven WeatherCards', () => {
    let component = mount(<App hourCards={} />);
    const cards = component.find();
    expect(cards).toHaveLength(7);
  });

});
