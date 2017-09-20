import React, { Component } from 'react';

const TenDayCard = (props) => {
  console.log('ten day card: ', props);
  return(
    <div className="card">
      <h3 className="ten-day-card-day">{props.day}</h3>
      <i className={`small-icon wi wi-wu-${props.icon}`}></i>
      <p className="card-lo-hi">{props.lowF}&deg; <span className="pipe">|</span> {props.highF}&deg;</p>
      <p className="hide card-lo-hi">{props.lowC}&deg; <span className="pipe">|</span> {props.highC}&deg;</p>
    </div>
  )
}

export default TenDayCard;
