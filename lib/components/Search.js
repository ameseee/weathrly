import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    }
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  componentDidMount(){

  }

  handleSearchClick(input) {
    console.log('click');
    if(isNaN(parseInt(input))){
      let inputState = input.slice(-2, input.length);
      let inputCity = input.slice(0, -4);

      console.log('inputState: ', inputState);
      console.log('inputCity: ', inputCity);

      this.props.fetchDataStateCity(inputState, inputCity)
    } else {
      this.props.fetchDataZipCode(input)
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
            onClick={ () => {
                this.handleSearchClick(this.state.searchInput)
              }
            }
            >
          Submit
        </button>
      </div>
    )
  }
}
