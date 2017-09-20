import React from 'react';
import TenDay from './TenDay';
import SevenHour from './SevenHour';

const Current = (props) => {

  // let hourlyObjectArray = [];
  //
  // for (let i = 0; i < 7; i++) {
  //   hourlyObjectArray.push(
  //     [
  //       props.hourlyTime[i],
  //       props.hourlyTempF[i],
  //       props.hourlyTempC[i],
  //       props.hourlyIcon[i]
  //     ]
  //   )
  //   // hourlyObjectArray.push(
  //   //   {
  //   //     hourlyTime: props.hourlyTime[i],
  //   //     hourlyTempF: props.hourlyTempF[i],
  //   //     hourlyTempC: props.hourlyTempC[i],
  //   //     hourlyIcon: props.hourlyIcon[i]
  //   //   }
  //   // )
  // }
  //
  // let mappedHour = hourlyObjectArray.map( (element, i) => {
  //   if(element[0].length === 8){
  //     return(
  //       <div className="card"
  //            key={i}>
  //         <h3 className="hour-card-hour">{element[0].slice(0,2) + element[0].slice(5,8)}</h3>
  //         <i className={`small-icon wi wi-wu-${element[3]}`}></i>
  //         <p className="hour-card-temp"> {element[1]}&deg;</p>
  //         <p className="hide hour-card-temp">{element[2]}&deg;</p>
  //       </div>
  //     )
  //   }
  //
  //   return(
  //     <div className="card"
  //          key={i}>
  //       <h3 className="hour-card-hour">{element[0].slice(0,1) + element[0].slice(4,7)}</h3>
  //       <i className={`small-icon wi wi-wu-${element[3]}`}></i>
  //       <p className="hour-card-temp">{element[1]}&deg;</p>
  //       <p className="hide hour-card-temp">{element[2]}&deg;</p>
  //     </div>
  //   )
  //   })

    let tenDayArray = [];

    for (let i = 0; i < 10; i++) {
      tenDayArray.push(
        [
          props.tenDayDay[i],
          props.tenDayHighF[i],
          props.tenDayLowF[i],
          props.tenDayHighC[i],
          props.tenDayLowC[i],
          props.tenDayIcon[i]
        ]
      )
    }

    let mappedTenDay = tenDayArray.map( ( element, i ) => {
      return (
        <div className="card"
             key={i}>
          <h3 className="ten-day-card-day">{element[0]}</h3>
          <i className={`small-icon wi wi-wu-${element[5]}`}></i>
          <p className="card-lo-hi">{element[2]}&deg; <span className="pipe">|</span> {element[1]}&deg;</p>
          <p className="hide card-lo-hi">{element[4]}&deg; <span className="pipe">|</span> {element[3]}&deg;</p>
        </div>
      )
    })

  return (

    <div className="current-div">

      <section className="current-top">
        <h2 className="location">{props.location}</h2>
      </section>

      <i className={`current-icon wi wi-wu-${props.currentIcon}`}></i>
      <p className="current-temp">{props.tempF}&deg;</p>
      <p className="hide current-temp-c">{props.tempC}&deg;</p>

      <section className="bottom-of-page">
        <article className="current-section">
          <div>
            <h2 className="current-header">{props.day}</h2>
          </div>

          <section className="current-bottom">
            <h3 className="brief-summary">{props.briefSummary}</h3>
            <h4 className="high-low">{props.lowF}&deg; <span className="pipe">|</span> {props.highF}&deg;</h4>
            <h4 className="hide high-low-c">{props.lowC}&deg; <span className="pipe">|</span> {props.highC}&deg;</h4>
          </section>

          <p className="summary">{props.verboseSummaryF}</p>
          <p className="hide summary-c">{props.verboseSummaryC}</p>
        </article>

        <article className="right-desktop">

          <SevenHour
            hourlyTime={props.hourlyTime}
            hourlyTempF={props.hourlyTempF}
            hourlyTempC={props.hourlyTempC}
            hourlyIcon={props.hourlyIcon}
          />

          <TenDay
            tenDayDay={props.tenDayDay}
            tenDayHighF={props.tenDayHighF}
            tenDayLowF={props.tenDayLowF}
            tenDayHighC={props.tenDayHighC}
            tenDayLowC={props.tenDayLowC}
            tenDayIcon={props.tenDayIcon}
           />

        </article>
        <h1 className="wearthrly">weathrly</h1>
      </section>

    </div>
  )
}

export default Current;
