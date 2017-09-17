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
        <div className="hour-card">
          <h3 className="hour-card-hour">{element[0].slice(0,2) + element[0].slice(5,8)}</h3>
          <img className="hour-card-icon" src="" alt="" />
          <p className="hour-card-temp"> {element[1]}</p>
          <p className="hide hour-card-temp">{element[2]}</p>
        </div>
      )
    }

    return(
      <div>
        <h3>{element[0].slice(0,1) + element[0].slice(4,7)}</h3>
        <p>TempF: <span>{element[1]}</span></p>
        <p>TempC: <span>{element[2]}</span></p>
        <p>Icon: <span>{element[3]}</span></p>
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
        <div>
          <h3>{element[0]}</h3>
          <p>High F: <span>{element[1]}</span></p>
          <p>Low F: <span>{element[2]}</span></p>
          <p>High C: <span>{element[3]}</span></p>
          <p>Low C: <span>{element[4]}</span></p>
          <p>Icon: <span>{element[5]}</span></p>
        </div>
      )
    })

  return (

    <div className="current-div">

      <section className="current-top">
        <h2 className="location">{props.location}</h2>
        <h3 className="brief-summary">{props.briefSummary}</h3>
      </section>

      <h1 className="wearthrly">weathrly</h1>
      <p className="current-temp">{props.tempF}</p>
      <p className="hide current-temp">{props.tempC}</p>
      <p>Current Weather Icon: <span>{props.currentIcon}</span></p>

      <section className="current-bottom">
        <h4 className="day">{props.day}</h4>
        <h4 className="high-low">{props.lowF}/{props.highF}</h4>
        <h4 className="hide high-low">{props.lowC}/{props.highC}</h4>
      </section>

      <p className="summary">{props.verboseSummaryF}</p>
      <p className="hide summary">{props.verboseSummaryC}</p>

      <div>
        <h2 className="today-header">Today</h2>
        <div className="hour-card-container">{mappedHour}</div>
      </div>
      {mappedTenDay}

    </div>
  )
}

export default Current;
