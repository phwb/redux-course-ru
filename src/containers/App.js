import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import * as pageActions from '../actions/PageActions';

class App extends Component {
  render() {
    let { props } = this;
    const { user, page } = props;
    const { setYear, getPhotos } = props.pageActions;

    return (
      <div>
        <User {...user} />
        <Page {...page} setYear={setYear} getPhotos={getPhotos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
