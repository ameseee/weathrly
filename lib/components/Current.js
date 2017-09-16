import React from 'react';
import testData from '../testData';

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
          <div>
            <h3>{element[0]}</h3>
            <p>TempF: <span>{element[1]}</span></p>
            <p>TempC: <span>{element[2]}</span></p>
          </div>
        )
    })



  return (
    <div>
      <p>location: <span>{props.location}</span></p>
      <p>current condition: <span>{props.briefSummary}</span></p>
      <p>day: <span>{props.day}</span></p>
      <p>current temp f: <span>{props.tempF}</span></p>
      <p>current temp c: <span>{props.tempC}</span></p>
      <p>high F: <span>{props.highF}</span></p>
      <p>low F: <span>{props.lowF}</span></p>
      <p>high C: <span>{props.highC}</span></p>
      <p>low C: <span>{props.lowC}</span></p>
      <p>Daily summary F: <span>{props.verboseSummaryF}</span></p>
      <p>Daily summary C: <span>{props.verboseSummaryC}</span></p>
      {mapped}
    </div>
  )
}

export default Current;
