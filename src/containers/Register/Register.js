import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="register">Register Page</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
