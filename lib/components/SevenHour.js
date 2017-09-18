import React, { Component } from 'react';
import styles from '../css/styles';

const SevenHour = (props) => {

  return (
    <div className="today-section">
      <h2 className="today-header">Later Today</h2>
      <div className="card-container">{props.mappedHour}</div>
    </div>
  )
}

export default SevenHour;
