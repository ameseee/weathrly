import React, { Component } from 'react';
import Current from './Current';
import HourCard from './HourCard';

const SevenHour = (props) => {

  const sevenHours = props.hourlyTime || [];
  const hourlyObjectArray = [];

  const sevenHourArray = sevenHours.map((hour, i) => {
    hourlyObjectArray.push(
      {
        hourlyTime: props.hourlyTime[i],
        hourlyTempF: props.hourlyTempF[i],
        hourlyTempC: props.hourlyTempC[i],
        hourlyIcon: props.hourlyIcon[i]
      }
    )
  }
);

  const mappedHour = hourlyObjectArray.map( (element, i) => {
    if (element.hourlyTime.length === 8) {
      return (
        <div>
          <HourCard
            key={i}
            hour={element.hourlyTime.slice(0,2) + element.hourlyTime.slice(5,8)}
            tempF={element.hourlyTempF}
            tempC={element.hourlyTempC}
            icon={element.hourlyIcon}
          />
        </div>
      );
    }

    return (
      <div>
        <HourCard
          key={i}
          hour={element.hourlyTime.slice(0,1) + element.hourlyTime.slice(4,7)}
          tempF={element.hourlyTempF}
          tempC={element.hourlyTempC}
          icon={element.hourlyIcon}
        />
      </div>
    );
  });

  return (
    <div className="today-section">
      <h2 className="today-header">Later Today</h2>
      <div className="card-container">
        {mappedHour}
      </div>
    </div>
  );
};

export default SevenHour;
