import React, { PropTypes, Component } from 'react';

export default class User extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };
  
  render() {
    const { name } = this.props;
    return (
      <div>
        <p>Hello, {name}!</p>
      </div>
    );
  }
}
