import React from 'react';
import testData from '../testData';

const Current = (props) => {

  let hourlyObjectArray = [];
  let tenDayArray = [];

  for (let i = 0; i < 7; i++) {
    hourlyObjectArray.push(
      [props.hourlyTime[i],
       props.hourlyTempF[i],
       props.hourlyTempC[i],
       props.hourlyIcon[i]
      ]
    )
    }

    let mappedHour = hourlyObjectArray.map( element => {
      if(element[0].length === 8){
        return(
          <div>
            <h3>{element[0].slice(0,2) + element[0].slice(5,8)}</h3>
            <p>TempF: <span>{element[1]}</span></p>
            <p>TempC: <span>{element[2]}</span></p>
            <p>Icon: <span>{element[3]}</span></p>
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

    for (let i = 0; i < 7; i++) {
      tenDayArray.push(
        [props.tenDayDay[i],
         props.tenDayHighF[i],
         props.tenDayLowF[i],
         props.tenDayHighC[i],
         props.tenDayLowC[i],
         props.tenDayIcon[i],
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
    } )

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
      <p>Current Weather Icon: <span>{props.currentIcon}</span></p>

      {mappedHour}
      {mappedTenDay}
    </div>
  )
}

export default Current;
