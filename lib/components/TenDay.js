import React, { Component } from 'react';
import Current from './Current';
import TenDayCard from './TenDayCard';

const TenDay = (props) => {

  let tenDays = props.tenDayDay || [];

  const tenDayArray = tenDays.map((day, i) => {
    return [
      day,
      props.tenDayHighF[i],
      props.tenDayLowF[i],
      props.tenDayHighC[i],
      props.tenDayLowC[i],
      props.tenDayIcon[i]
    ]
  })

  let mappedTenDay = tenDayArray.map( ( element, i ) => {
    return (
      <div>
        <TenDayCard
          key={i}
          day={element[0]}
          highF={element[1]}
          lowF={element[2]}
          highC={element[3]}
          lowC={element[4]}
          icon={element[5]}
        />
      </div>
    )
  })

  return(
    <div className="this-week-section">
      <h2 className="this-week-header">This Week</h2>
      <div className="day-card-container">
        {mappedTenDay}
      </div>
    </div>
  )
}

export default TenDay;
