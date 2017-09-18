import React from 'react';
import styles from '../css/styles';
import Trie from '../HelperFiles/Trie';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      suggestions: []
    }

    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleSearchClick(input) {
    if(isNaN(parseInt(input))){
      let inputState = input.slice(-2, input.length);
      let inputCity = input.slice(0, -4);

      this.props.fetchDataStateCity(inputState, inputCity);
    } else {
      this.props.fetchDataZipCode(input)
    }
    console.log(input, input.value);
  }

  render () {
    return(
      <div className="search-div">
        <button
          className="search-btn"
          onClick={ () => {
              this.handleSearchClick(this.state.searchInput);
            }
          }
          >
          Search
        </button>
        
        <input
          className="search-input"
          type="text"
          placeholder="search by city or zip"
          value={this.state.searchInput}
          onChange={
            (event) => {
              this.setState( { searchInput: event.target.value } );

            }
          }
          onKeyPress={
            (event) => {
            if (event.key === 'Enter') {
              this.handleSearchClick(this.state.searchInput);
            }
          }}
          />
      </div>
    )
  }
}
