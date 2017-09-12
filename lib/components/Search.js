import React from 'react';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }

  }

  render () {
    return(
      <div>
        <input
          type="text"
          value={this.state.searchInput}
          onChange={
            (event) => {
              this.setState( { searchInput: event.target.value } );
            }
          } />
          <button
            className="search-submit-button"
            onClick={ ()=>{
              {/* checks to see if location matches our data set */}
              {/* if it does, display current weather of location and save location to localstorage*/ }
              {/* if it does not... */}
              {/* move search bar */}
              {/* hide the welome */}
              }
            } >
            Submit
          </button>
      </div>
    )

  }
}
