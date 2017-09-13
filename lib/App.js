import React from 'react';
import Welcome from './containers/Welcome';
import Current from './components/Current';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null
    }

  }

  componentDidMount() {
      this.fetchData();
  }

  fetchData() {
      fetch('http://api.wunderground.com/api/c9c8a0ccbbe3d1c4/forecast/geolookup/conditions/q/CA/San_Francisco.json')
        .then( data => data.json() )
        .then( response => this.cleanData(response) )
        .catch( error => 'panic' );
  }

  cleanData(response) {
    this.setState(
      { data: {
            day: response.forecast.txt_forecast.forecastday[0].title,
            location: response.current_observation.display_location.full,
            tempF: response.current_observation.temp_f
            }
          }
    )
    console.log(this.state.data.day);
  }

  render () {
    if (!this.state.data) {
      return <div>loading</div>;
    }

    return (
      <div>
        <Welcome />
        <Current
          day={this.state.data.day}/>
      </div>
    )

  }
}
