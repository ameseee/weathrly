import React from 'react';
import { shallow, mount } from 'enzyme';
import Current from '../lib/components/Current';
import App from '../lib/App';
import testData from './80014';

describe('CURRENT', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Current
      location='Aurora, CO'
      briefSummary='Clear'
      day='Monday'
      tempF='75.6'
      tempC='24.2'
      highF='82'
      lowF='58'
      highC='28'
      lowC='14'
      verboseSummaryF='Abundant sunshine. High 82F. Winds SE at 5 to 10 mph.'
      verboseSummaryC='Sunny. High 28C. Winds SE at 10 to 15 km/h.'
      currentIcon='clear'
      hourlyTime="[ '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM','6:00 PM' ]"
      hourlyTempF="[ '76', '78', '80', '80', '81', '81', '80' ]"
      hourlyTempC="[ '24', '26', '27', '27', '27', '27', '27' ]"
      hourlyIcon="[ 'clear', 'clear', 'clear', 'clear', 'clear', 'clear', 'clear' ]"
      tenDayDay="[ 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED' ]"
      tenDayHighF="[ '82', '84', '80', '85', '75', '64', '60', '56', '64', '68' ]"
      tenDayLowF="[ '58', '48', '54', '55', '46', '45', '42', '43', '43', '44' ]"
      tenDayHighC="[ '28', '29', '27', '29', '24', '18', '16', '13', '18', '20' ]"
      tenDayLowC="[ '14', '9', '12', '13', '8', '7', '6', '6', '6', '7' ]"
      tenDayIcon="[ 'clear',
                    'partlycloudy',
                    'clear', 'clear',
                    'mostlycloudy',
                    'mostlycloudy',
                    'chancerain',
                    'chancerain',
                    'partlycloudy',
                    'partlycloudy' ]"
    />);
  });

  it('should render the current temp', () => {
    const current = component.find('.current-temp');
    expect(current.text()).toEqual('75.6°');

  });

  it('should render the location', () => {
    const location = component.find('.location');
    expect(location.text()).toEqual('Aurora, CO');
  });

  it('should render the day', () => {
    const day = component.find('.current-header');
    expect(day.text()).toEqual('Monday');
  });

  it('should render the current high/low for the day', () => {
    const lowHigh = component.find('.high-low');
    expect(lowHigh.text()).toEqual('58° | 82°');
  });

  it('should render the current summary - brief', () => {
    const summary = component.find('.brief-summary');
    expect(summary.text()).toEqual('Clear');
  });

  it('should render the current summary - verbose', () => {
    const verboseSummary = component.find('.summary');
    expect(verboseSummary.text()).toEqual('Abundant sunshine. High 82F. Winds SE at 5 to 10 mph.');
  });

});
