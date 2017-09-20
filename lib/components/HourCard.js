import React, { Component } from 'react';

const HourCard = (props) => {
  return (
    <div className="card">
      <h3 className="hour-card-hour">{props.hour}</h3>
      <i className={`small-icon wi wi-wu-${props.icon}`}></i>
      <p className="hour-card-temp-f">{props.tempF}&deg;</p>
      <p className="hide hour-card-temp-c">{props.tempC}&deg;</p>
    </div>
  )
}

export default HourCard;
