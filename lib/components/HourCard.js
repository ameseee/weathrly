import React, { Component } from 'react';

const HourCard = (props) => {
  console.log(props.hour);
  return (
    <div className="card">
      <h3 className="hour-card-hour">{props.hour}</h3>
      <i className={`small-icon wi wi-wu-${props.icon}`}></i>
      <p className="hour-card-temp"> {props.tempF}&deg;</p>
      <p className="hide hour-card-temp">{props.tempC}&deg;</p>
    </div>
  )

}

export default HourCard;
//<h3 className="hour-card-hour">{props.hourArray[0].slice(0,2) + props.hourArray[0].slice(5,8)}</h3>
// <i className={`small-icon wi wi-wu-${props.hourArray.element[3]}`}></i>
// <p className="hour-card-temp"> {props.hourArray.element[1]}&deg;</p>
// <p className="hide hour-card-temp">{props.hourArray.element[2]}&deg;</p>
