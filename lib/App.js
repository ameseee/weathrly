import React from 'react';
import Welcome from './containers/Welcome';
import Main from './containers/Main';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }

  }

  render () {

    return (
      <div>
        <Welcome />
        <Main />
      </div>
    )

  }
}
