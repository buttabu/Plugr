import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { HomePage, LoginForm } from 'components';
import { login } from '../../actions/Auth/actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const styles = require('./Home.scss');

    return (
      <div className="home"> {/*{styles.home}*/}
        <Helmet title="Home" />
        <div className="background col-xs-12 col-sm-6 col-md-8 col-lg-8">
          <HomePage />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <LoginForm {...this.props.actions} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ login }, dispatch)
});

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
