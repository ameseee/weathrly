import React, { Component } from 'react';
import Current from './Current';
import TenDayCard from './TenDayCard';

const TenDay = (props) => {

  const tenDays = props.tenDayDay || [];
  const tenDayObjectArray = [];

  const tenDayArray = tenDays.map((day, i) => {
    tenDayObjectArray.push(
      {
        day: props.tenDayDay[i],
        highF: props.tenDayHighF[i],
        lowF: props.tenDayLowF[i],
        highC: props.tenDayHighC[i],
        lowC: props.tenDayLowC[i],
        icon: props.tenDayIcon[i]
      }
    )
  });

  const mappedTenDay = tenDayObjectArray.map((element, i) => {
    return (
      <div>
        <TenDayCard
          key={i}
          day={element.day}
          highF={element.highF}
          lowF={element.lowF}
          highC={element.highC}
          lowC={element.lowC}
          icon={element.icon}
        />
      </div>
    );
  });

  return (
    <div className="this-week-section">
      <h2 className="this-week-header">This Week</h2>
      <div className="day-card-container">
        {mappedTenDay}
      </div>
    </div>
  );
};

export default TenDay;
