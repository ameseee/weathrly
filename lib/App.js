import React from 'react';
import Welcome from './containers/Welcome';
import Current from './components/Current';
import returnApiKey from './Key.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    }

  }

  componentDidMount() {
      this.fetchData();
  }

  fetchData() {
      fetch(`http://api.wunderground.com/api/${returnApiKey()}/conditions/forecast/forecast10day/hourly/hourly10day/q/CA/San_Francisco.json`)
        .then( data => data.json() )
        .then( response => this.cleanData(response) )
        .catch( error => 'panic' );
  }

  cleanData(response) {
    this.setState(
      { data: {
            location: response.current_observation.display_location.full,
            briefSummary: response.current_observation.weather,
            day: response.forecast.txt_forecast.forecastday[0].title,
            tempF: response.current_observation.temp_f,
            tempC: response.current_observation.temp_c,
            highF: response.forecast.simpleforecast.forecastday[0].high.fahrenheit,
            lowF: response.forecast.simpleforecast.forecastday[0].low.fahrenheit,
            highC: response.forecast.simpleforecast.forecastday[0].high.celsius,
            lowC: response.forecast.simpleforecast.forecastday[0].low.celsius,
            verboseSummaryF: response.forecast.txt_forecast.forecastday[0].fcttext,
            verboseSummaryC: response.forecast.txt_forecast.forecastday[0].fcttext_metric
            }
          }
    )
    console.log(this.state.data.briefSummary);
  }

  render () {
    if (!this.state.data) {
      return <div>loading</div>;
    }

    return (
      <div>
        <Welcome />
        <Current
          location={this.state.data.location}
          briefSummary={this.state.data.briefSummary}
          day={this.state.data.day}
          tempF={this.state.data.tempF}
          tempC={this.state.data.tempC}
          highF={this.state.data.highF}
          lowF={this.state.data.lowF}
          highC={this.state.data.highC}
          lowC={this.state.data.lowC}
          verboseSummaryF={this.state.data.verboseSummaryF}
          verboseSummaryC={this.state.data.verboseSummaryC}
          />
      </div>
    )

  }
}
