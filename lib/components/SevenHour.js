import React, { Component } from 'react';
import Current from './Current';
import HourCard from './HourCard';
const SevenHour = (props) => {

  console.log(props);
  let hourlyObjectArray = [];

  for (let i = 0; i < 7; i++) {
    hourlyObjectArray.push(
      [
        props.hourlyTime[i],
        props.hourlyTempF[i],
        props.hourlyTempC[i],
        props.hourlyIcon[i]
      ]
    )
  }
    // hourlyObjectArray.push(
    //   {
    //     hourlyTime: props.hourlyTime[i],
    //     hourlyTempF: props.hourlyTempF[i],
    //     hourlyTempC: props.hourlyTempC[i],
    //     hourlyIcon: props.hourlyIcon[i]
    //   }
    // )
  let mappedHour = hourlyObjectArray.map( (element, i) => {
    if(element[0].length === 8){
      return (
        <div class>
          <HourCard
            hour={element[0].slice(0,2) + element[0].slice(5,8)}
            tempF={element[1]}
            tempC={element[2]}
            icon={element[3]}
          />
        </div>
      )
    }

    return (
      <div>
        <HourCard
          hour={element[0].slice(0,1) + element[0].slice(4,7)}
          tempF={element[1]}
          tempC={element[2]}
          icon={element[3]}
        />
      </div>
    )
  })

    return (
      <div className="today-section">
        <h2 className="today-header">Later Today</h2>
        <div className="card-container">
          {mappedHour}
        </div>
      </div>
    )
}

export default SevenHour;

//this is where the mapping and rendering of cards should happen

//card
{/* <div className="card"
     key={i}>
  <h3 className="hour-card-hour">{element[0].slice(0,1) + element[0].slice(4,7)}</h3>
  <i className={`small-icon wi wi-wu-${element[3]}`}></i>
  <p className="hour-card-temp">{element[1]}&deg;</p>
  <p className="hide hour-card-temp">{element[2]}&deg;</p>
</div>  */}

{/* <HourCard hourArray={hourlyObjectArray}/> */}
