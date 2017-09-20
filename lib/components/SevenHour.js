import React, { Component } from 'react';
import Current from './Current';
import HourCard from './HourCard';

const SevenHour = (props) => {

  const sevenHours = props.hourlyTime || [];

  const sevenHourArray = sevenHours.map((hour, i) => {
    return [
      hour,
      props.hourlyTempF[i],
      props.hourlyTempC[i],
      props.hourlyIcon[i],
    ];
  }
);
    // hourlyObjectArray.push(
    //   {
    //     hourlyTime: props.hourlyTime[i],
    //     hourlyTempF: props.hourlyTempF[i],
    //     hourlyTempC: props.hourlyTempC[i],
    //     hourlyIcon: props.hourlyIcon[i]
    //   }
    // )
  const mappedHour = sevenHourArray.map((element, i) => {
    if (element[0].length === 8) {
      return (
        <div>
          <HourCard
            key={i}
            hour={element[0].slice(0, 2) + element[0].slice(5, 8)}
            tempF={element[1]}
            tempC={element[2]}
            icon={element[3]}
          />
        </div>
      );
    }

    return (
      <div>
        <HourCard
          key={i}
          hour={element[0].slice(0, 1) + element[0].slice(4, 7)}
          tempF={element[1]}
          tempC={element[2]}
          icon={element[3]}
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
