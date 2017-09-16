import React from 'react';
import testData from '../testData';
import styles from '../styles';

const Current = (props) => {

  let hourlyObjectArray = [];

  for (let i = 0; i < 7; i++) {
    hourlyObjectArray.push(
      [props.hourlyTime[i],
       props.hourlyTempF[i],
       props.hourlyTempC[i]
      ]
    )
    }

    let mapped = hourlyObjectArray.map( element => {
        return(
          <div className="hour-card">
            <h3 className="hour-card-hour">{element[0]}</h3>
            <img className="hour-card-icon" src="" alt="" />
            <p className="hour-card-temp"> {element[1]}</p>
            <p className="hide hour-card-temp">{element[2]}</p>
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


      <section className="current-bottom">
        <h4 className="day">{props.day}</h4>
        <h4 className="high-low">{props.lowF}/{props.highF}</h4>
        <h4 className="hide high-low">{props.lowC}/{props.highC}</h4>

      </section>

      <p className="summary">{props.verboseSummaryF}</p>
      <p className="hide summary">{props.verboseSummaryC}</p>

      <div>
        <h2 className="today-header">Today</h2>
        <div className="hour-card-container">{mapped}</div>
      </div>
    </div>
  )
}

export default Current;
