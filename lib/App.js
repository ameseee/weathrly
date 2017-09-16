import React from 'react';
import Current from './components/Current';
import SevenHour from './components/SevenHour';
import Search from './components/Search';
import apiKey from './Key';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    }

  }

  componentDidMount(){
    if(!this.state.data){
      let userZip = this.getLocalStorage();
      if(userZip){
          this.fetchDataZipCode(userZip);
      }
    }
  }

  setLocalStorage(){
    localStorage.setItem('zipcode', JSON.stringify(this.state.data.zip));
  }

  getLocalStorage(){
    return JSON.parse(localStorage.getItem('zipcode'));
  }

  fetchDataCountryStateCity(country, state, city){
    fetch(`http://api.wunderground.com/api/${apiKey}/conditions/forecast/forecast10day/hourly/hourly10day/q/${country}/${state}/${city}.json`)
      .then( data => data.json() )
      .then( response => this.cleanData(response) )
      .catch( error => 'panic' );
  }

  fetchDataStateCity(state, city) {
      fetch(`http://api.wunderground.com/api/${apiKey}/conditions/forecast/forecast10day/hourly/hourly10day/q/${state}/${city}.json`)
        .then( data => data.json() )
        .then( response => this.cleanData(response) )
        .catch( error => 'panic' );
  }

  fetchDataZipCode(zip){
    fetch(`http://api.wunderground.com/api/${apiKey}/conditions/forecast/forecast10day/hourly/hourly10day/q/${zip}.json`)
      .then( data => data.json() )
      .then( response => this.cleanData(response) )
      .catch( error => 'panic' );
  }

  cleanData(response) {
    this.setState(
      { data: {
          zip: response.current_observation.display_location.zip,
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
          verboseSummaryC: response.forecast.txt_forecast.forecastday[0].fcttext_metric,
          currentIcon: response.current_observation.icon,
          sevenHourTimes: response.hourly_forecast.map( hour => hour.FCTTIME.civil).slice(0,7),
          sevenHourAMPM: response.hourly_forecast.map( hour => hour.FCTTIME.ampm ).slice(0,7),
          sevenHourTempsF: response.hourly_forecast.map( hour => hour.temp.english).slice(0,7),
          sevenHourTempsC: response.hourly_forecast.map( hour => hour.temp.metric).slice(0,7),
          sevenHourIcon: response.hourly_forecast.map( hour => hour.icon).slice(0,7),
          tenDayDay: response.forecast.simpleforecast.forecastday.map( day => day.date.weekday_short.toUpperCase() ),
          tenDayHighF: response.forecast.simpleforecast.forecastday.map( day => day.high.fahrenheit ),
          tenDayLowF: response.forecast.simpleforecast.forecastday.map( day => day.low.fahrenheit ),
          tenDayHighC: response.forecast.simpleforecast.forecastday.map( day => day.high.celsius ),
          tenDayLowC: response.forecast.simpleforecast.forecastday.map( day => day.low.celsius ),
          tenDayIcon: response.forecast.simpleforecast.forecastday.map( day => day.icon)
        }
      }, () => {
        this.setLocalStorage()
      }
    )
  }

  render () {
    if (!this.state.data) {
      return <Search
        fetchDataStateCity={this.fetchDataStateCity}
        fetchDataZipCode={this.fetchDataZipCode}
        cleanData={this.cleanData.bind(this)}
        setLocalStorage={this.setLocalStorage.bind(this)}
        getLocalStorage={this.getLocalStorage.bind(this)}
      />
    }

    return (
      <div>
        <Search
          fetchDataStateCity={this.fetchDataStateCity}
          fetchDataZipCode={this.fetchDataZipCode}
          cleanData={this.cleanData.bind(this)}
          setLocalStorage={this.setLocalStorage.bind(this)}
          getLocalStorage={this.getLocalStorage.bind(this)}
        />

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
          currentIcon={this.state.data.currentIcon}
          hourlyTime={this.state.data.sevenHourTimes}
          hourlyTempF={this.state.data.sevenHourTempsF}
          hourlyTempC={this.state.data.sevenHourTempsC}
          hourlyIcon={this.state.data.sevenHourIcon}
          tenDayDay={this.state.data.tenDayDay}
          tenDayHighF={this.state.data.tenDayHighF}
          tenDayLowF={this.state.data.tenDayLowF}
          tenDayHighC={this.state.data.tenDayHighC}
          tenDayLowC={this.state.data.tenDayLowC}
          tenDayIcon={this.state.data.tenDayIcon}
        />
      </div>
    )
  }
}
