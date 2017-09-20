import React from 'react';
const CityList = require('../HelperFiles/CityList');
const Trie = require('../HelperFiles/Trie');

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      suggestions: [],
      trie: {},
    };

    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  componentDidMount() {
    this.state.trie = new Trie();
    this.state.trie.populate(CityList.data);
  }

  handleSearchClick(input) {
    if (isNaN(parseInt(input, 10))) {
      const inputState = input.slice(-2, input.length);
      const inputCity = input.slice(0, -4);

      this.props.fetchDataStateCity(inputState, inputCity);
    } else {
      this.props.fetchDataZipCode(input);
    }
  }

  handleAutoComplete(city) {
    this.setState({
      searchInput: '',
      suggestions: [],
    });
    this.handleSearchClick(city);
  }

  render() {
    const mappedCities = this.state.suggestions.map((city) => {
      return (
        <p className="drop-down-options"
           onClick={this.handleAutoComplete.bind(this, city)}>{city}</p>
      );
    });

    return (
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
              const searchResults = this.state.trie.suggest(event.target.value).slice(0, 4);
              this.setState({
                searchInput: event.target.value,
                suggestions: searchResults,
              });
            }
          }
          onKeyPress={
            (event) => {
              if (event.key === 'Enter') {
                this.handleSearchClick(this.state.searchInput);
              }
            }}
          />

            <div className="suggestions-box">
              {mappedCities}
            </div>

      </div>
    );
  }
}
