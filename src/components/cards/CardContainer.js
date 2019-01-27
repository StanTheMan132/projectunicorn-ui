import React, { Component } from 'react';

export default class CardContainer extends Component {
  render() {
    const { className } = this.props;

    return <div className={className}>{this.props.children}</div>;
  }
}
