import React, { Component } from 'react';
import Search from './Search';

const Welcome = (props) => {

  console.log(props);
  return (
    <div className="today-section">
      <Search
        fetchDataStateCity={props.fetchDataStateCity}
        fetchDataZipCode={props.fetchDataZipCode}
        cleanData={props.cleanData}
        setLocalStorage={props.setLocalStorage}
        getLocalStorage={props.getLocalStorage}
      />
      <h1 className="welcome-weathrly">weathrly</h1>
      <p className="welcome-directions">type in a city or zip code to get your weather!</p>
    </div>
  )
}

export default Welcome;
