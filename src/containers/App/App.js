import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Alert from 'react-bootstrap/lib/Alert';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';
import config from 'config';
import { asyncConnect } from 'redux-connect';

import { isLoaded as isAuthLoaded } from 'redux/modules/auth';
import { load as loadAuth, logout } from '../../actions/Auth/actions';

import '../../helpers/css/app.css';
import '../../helpers/css/league.css';
import '../../helpers/css/team.css';

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const promises = [];
    // if (!isAuthLoaded(getState())) {
    //   promises.push(dispatch(loadAuth()));
    // }
    return Promise.all(promises);
  }
}])
@connect(
  state => ({
    user: state.auth.user
  }),
  { logout, pushState: push })
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    console.log('\n\nApps PROPS: ', this.props);
    const { user } = this.props;
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
                <div className={styles.brand} /> {/* {styles.brand} */}
                <span>Plugr</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

           <Navbar.Collapse>
            <Nav navbar>
              <LinkContainer to="/systemdemands">
                <NavItem>System Demands</NavItem>
              </LinkContainer>

              <LinkContainer to="/leagues">
                <NavItem>Leagues</NavItem>
              </LinkContainer>

              <LinkContainer to="/teams">
                <NavItem>Teams</NavItem>
              </LinkContainer>

              <LinkContainer to="/athletes">
                <NavItem>athletes</NavItem>
              </LinkContainer>

              {!user && (
                <LinkContainer to="/register">
                  <NavItem>Register</NavItem>
                </LinkContainer>
              )}

              {user && (
                <LinkContainer to="/logout">
                  <NavItem className="logout-link" onClick={this.handleLogout}>
                    {' '}
                    Logout{' '}
                  </NavItem>
                </LinkContainer>
              )}
              {user && (
                <LinkContainer to="/account">
                  <NavItem>Account</NavItem>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>

        </Navbar>

        <div className={styles.appContent}> {/* {styles.appContent} */}
          {this.props.children}
        </div>

        {/*
        <div className="well text-center">
          FOOTER
        </div>
        */}


      </div>
    );
  }
}
