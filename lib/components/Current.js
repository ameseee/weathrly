import React from 'react';
import styles from '../styles';

const Current = (props) => {

  let hourlyObjectArray = [];
  let tenDayArray = [];

  for (let i = 0; i < 7; i++) {
    hourlyObjectArray.push(
      [
        props.hourlyTime[i],
        props.hourlyTempF[i],
        props.hourlyTempC[i],
        props.hourlyIcon[i]
      ]
    )
  }

  let mappedHour = hourlyObjectArray.map( element => {
    if(element[0].length === 8){
      return(
        <div className="card">
          <h3 className="hour-card-hour">{element[0].slice(0,2) + element[0].slice(5,8)}</h3>
          <p className="card-icon">{element[3]}</p>
          <p className="hour-card-temp"> {element[1]}</p>
          <p className="hide hour-card-temp">{element[2]}</p>
        </div>
      )
    }

    return(
      <div className="card">
        <h3 className="hour-card-hour">{element[0].slice(0,1) + element[0].slice(4,7)}</h3>
        <p className="card-icon">{element[3]}</p>
        <p className="hour-card-temp">{element[1]}</p>
        <p className="hide hour-card-temp">{element[2]}</p>
      </div>
    )
    })

    for (let i = 0; i < 10; i++) {
      tenDayArray.push(
        [
          props.tenDayDay[i],
          props.tenDayHighF[i],
          props.tenDayLowF[i],
          props.tenDayHighC[i],
          props.tenDayLowC[i],
          props.tenDayIcon[i]
        ]
      )
    }

    let mappedTenDay = tenDayArray.map( element => {
      return(
        <div className="card">
          <h3 className="ten-day-card-day">{element[0]}</h3>
          <p className="card-icon">{element[5]}</p>
          <p className="card-lo-hi">{element[2]}/{element[1]}</p>
          <p className="hide card-lo-hi">{element[4]}/{element[3]}</p>
        </div>
      )
    })

  return (

    <div className="current-div">

      <section className="current-top">
        <h2 className="location"><img className="search-icon"src="./assets/search-location.svg"/>{props.location}</h2>
        <h3 className="brief-summary">{props.briefSummary}</h3>
      </section>

      <h1 className="wearthrly">weathrly</h1>
      <p className="current-temp">{props.tempF}</p>
      <p className="hide current-temp">{props.tempC}</p>
      <p className="current-icon">{props.currentIcon}Icon</p>

      <div>
        <h2 className="current-header">Current</h2>
      </div>

      <section className="current-bottom">
        <h4 className="day">{props.day}</h4>
        <h4 className="high-low">{props.lowF}/{props.highF}</h4>
        <h4 className="hide high-low">{props.lowC}/{props.highC}</h4>
      </section>

      <p className="summary">{props.verboseSummaryF}</p>
      <p className="hide summary">{props.verboseSummaryC}</p>

      <div>
        <h2 className="today-header">Today</h2>
        <div className="card-container">{mappedHour}</div>
      </div>

      <div>
        <h2 className="this-week-header">This Week</h2>
        <div className="day-card-container">{mappedTenDay}</div>
      </div>

    </div>
  )
}

export default Current;
