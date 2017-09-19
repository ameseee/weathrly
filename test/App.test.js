import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';

describe('APP', () => {
  it('should be stateful', () => {
    const app = shallow(<App />);


  });

  it('should set location to storage', () => {
    const app = shallow(<App />);
    const storage = global.localStorage;

    app.instance().setLocation(80014);
    expect(storage.getItem('location')).toEqual('80014');
  });

  it('should get location from storage', () => {
    const app = shallow(<App />);
    const storage = global.localStorage;

    storage.setItem('location', 80014);
    expect(app.instance().getLocation()).toEqual('80014');
  });

  it('should render weather report when a zip IS in localStorage', () => {
    const storage = global.localStorage;
    storage.setItem('location', 88005);

    const app = mount(<App />);
    expect(main.instance().getLocation()).toEqual('88005');
  });

  it('should render Welcome when localStorage is empty', () => {
    const storage = global.localStorage;
    storage.clear();

    const app = mount(<App />);
    expect(app.instance().getLocation()).toEqual(undefined);

    const welcome = app.find('.welcome-search');
    expect(welcome).toHaveLength(1);
  });

  it('fetch data from API', () => {

  });

  it('should store data in state once fetched from API', () => {

  });

});
