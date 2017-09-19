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
    expect(location.text()).toEqual('Denver, CO');
  });

  it('should render the day', () => {
    const day = component.find();
    expect(day.text()).toEqual('THU');
  });

  it('should render the current high/low for the day', () => {

  });

  it('should render the current summary - brief', () => {

  });

  it('should render the current summary - verbose', () => {

  });

})
;
