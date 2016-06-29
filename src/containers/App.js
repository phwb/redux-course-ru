import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';

class App extends Component {
  render() {
    const props = this.props;

    return (
      <div>
        <User {...props.user} />
        <Page {...props.page} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
