import React from 'react';
import testData from '../testData';

const Current = (props) => {
  return (
    <div>
      <p>location: <span>{props.location}</span></p>
      <p>current condition: <span>{props.briefSummary}</span></p>
      <p>day: <span>{props.day}</span></p>
      <p>current temp f: <span>{props.tempF}</span></p>
      <p>current temp c: <span>{props.tempC}</span></p>
      <p>high F: <span>{props.highF}</span></p>
      <p>low F: <span>{props.lowF}</span></p>
      <p>high C: <span>{props.highC}</span></p>
      <p>low C: <span>{props.lowC}</span></p>
      <p>Daily summary F: <span>{props.verboseSummaryF}</span></p>
      <p>Daily summary C: <span>{props.verboseSummaryC}</span></p>
    </div>
  )
}

export default Current;
