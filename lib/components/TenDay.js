import React, { Component } from 'react';

const TenDay = (props) => {

  return (
    <div className="this-week-section">
      <h2 className="this-week-header">This Week</h2>
      <div className="day-card-container">{props.mappedTenDay}</div>
    </div>
  )
}

export default TenDay;
