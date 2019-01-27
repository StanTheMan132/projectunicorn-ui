import React, { Component } from 'react';

class SearchBox extends Component {
  state = {
    query: null
  };

  render() {
    return (
      <div className="search-box">
        <input type="search" placeholder="search..." />
      </div>
    );
  }
}

export default SearchBox;
