import React, { Component } from 'react';
import { Link } from 'react-router';
import { LoginForm } from 'components';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('\nHomePage PROPS: ', this.props);
    return <div className="homepage">display here top clients and developers</div>;
  }
}
