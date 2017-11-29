import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AccountPage } from 'components';

class Account extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="account">
        <Helmet title="Account" />

        <AccountPage />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
