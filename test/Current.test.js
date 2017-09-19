import React from 'react';
import { shallow, mount } from 'enzyme';
import Current from '../lib/components/Current';
import App from '../lib/App';
import testData from './80014';

describe('CURRENT', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App //somehow call cleanData here///>)
  });


  it('should render the current temp', () => {
    const current = component.find();
    expect(current.text()).toEqual();
  });

  it('should render the location', () => {
    const location = component.find();
    expect(location.text()).toEqual('Aurora, CO');
  });

  it('should render the day', () => {
    const day = component.find();
    expect(day.text()).toEqual('MON');
  });

  it('should render the current high/low for the day', () => {
    const lowHigh = component.find();
    expect(lowHigh.text()).toEqual();
  });

  it('should render the current summary - brief', () => {
    const summary = component.find();
    expect(summary.text()).toEqual();
  });

  it('should render the current summary - verbose', () => {
    const verboseSummary = component.find();
    expect(verboseSummary.text()).toEqual();
  });

});
