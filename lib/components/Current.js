import React from 'react';
import testData from '../testData';

const Current = (props) => {
  console.log(props);

  return (
    <div>
      {/* <p>city: <span>{this.props.city}</span></p> */}
      <p>day: <span>{props.day}</span></p>
    {/* <p>current temp f: <span>{this.props.currentTempF}</span></p> */}
      {/* <p>current temp c: <span>{this.props.currentTempC}</span></p> */}
      {/* <p>brief summary: <span>{this.props.briefSummary}</span></p> */}
    </div>
  )
}

export default Current;

// let dataKeys = Object.keys(data);
// let currentObjsKeys = Object.keys(data.current_observation);
//
// let full = data.current_observation.display_location.full;
//
// let localEpoch = data.current_observation.local_epoch;
// let time = data.current_observation.local_time_rfc822;
//
// let day = data.forecast.txt_forecast.forecastday[0].title;
//
// let temp_c = data.current_observation.temp_c;
// let temp_f = data.current_observation.temp_f;
//
// let high_f = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
// let low_f = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
//
// let high_c = data.forecast.simpleforecast.forecastday[0].high.celsius;
// let low_c = data.forecast.simpleforecast.forecastday[0].low.celsius;
//
// let weatherBriefSummary = data.current_observation.weather;
// let weatherVerboseSummary_f = data.forecast.txt_forecast.forecastday[0].fcttext;
// let weatherVerboseSummary_c = data.forecast.txt_forecast.forecastday[0].fcttext_metric;
//
// let hour0 = {
//   hour: data.hourly_forecast[0].FCTTIME.civil,
//   nameOfDay: data.hourly_forecast[0].FCTTIME.weekday_name,
//   projectedTemp_f: data.hourly_forecast[0].temp.english,
//   projectedTemp_c: data.hourly_forecast[0].temp.metric,
//   weatherBriefSummary: data.hourly_forecast[0].condition
// }
//
// console.log(hour0);
