import React, { Component } from 'react';
import testData from '../testData';

const SevenHour = (props) => {
  return (
    <div>

    <div>
      <p>Hour: <span>{props.time[0]}</span></p>
      <p>TempF: <span>{props.tempF[0]}</span></p>
      <p>TempC: <span>{props.tempC[0]}</span></p>
    </div>

    <div>
      <p>Hour: <span>{props.time[1]}</span></p>
      <p>TempF: <span>{props.tempF[1]}</span></p>
      <p>TempC: <span>{props.tempC[1]}</span></p>
    </div>

    <div>
      <p>Hour: <span>{props.time[2]}</span></p>
      <p>TempF: <span>{props.tempF[2]}</span></p>
      <p>TempC: <span>{props.tempC[2]}</span></p>
    </div>

    <div>
      <p>Hour: <span>{props.time[3]}</span></p>
      <p>TempF: <span>{props.tempF[3]}</span></p>
      <p>TempC: <span>{props.tempC[3]}</span></p>
    </div>

    <div>
      <p>Hour: <span>{props.time[4]}</span></p>
      <p>TempF: <span>{props.tempF[4]}</span></p>
      <p>TempC: <span>{props.tempC[4]}</span></p>
    </div>

    <div>
      <p>Hour: <span>{props.time[5]}</span></p>
      <p>TempF: <span>{props.tempF[5]}</span></p>
      <p>TempC: <span>{props.tempC[5]}</span></p>
    </div>

    <div>
      <p>Hour: <span>{props.time[6]}</span></p>
      <p>TempF: <span>{props.tempF[6]}</span></p>
      <p>TempC: <span>{props.tempC[6]}</span></p>
    </div>

  </div>
  )
}

export default SevenHour;
