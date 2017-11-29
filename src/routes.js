import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { isLoaded as isAuthLoaded } from 'redux/modules/auth';
import { load as loadAuth, logout } from 'actions/Auth/actions';
import { 
  App, 
  Home, 
  NotFound,
  Register, 
  Account,
  League,
  Team
} from 'containers';

export default (store) => {
  function checkAuth(logged, replace, cb) {
    const { auth: { user } } = store.getState();
    if (!!user === !logged) replace('/');
    cb();
  }

  const requireLogin = (nextState, replace, cb) => {
    if (!isAuthLoaded(store.getState())) {
      // store.dispatch(loadAuth()).then(() => checkAuth(true, replace, cb));
    } else {
      checkAuth(true, replace, cb);
    }
  };

  const requireNotLogged = (nextState, replace, cb) => {
    if (!isAuthLoaded(store.getState())) {
      // store.dispatch(loadAuth()).then(() => checkAuth(false, replace, cb));
    } else {
      checkAuth(false, replace, cb);
    }
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      {/* Home (main) route */}
      <IndexRoute component={Home} />

      {/* Routes requiring login */}
      <Route onEnter={requireLogin}>
        <Route path="account" component={Account} />
      </Route>

      {/* Routes disallow login */}
      <Route onEnter={requireNotLogged}>
        {/* <Route path="register" component={Register} /> */}
      </Route>

      {/* Routes */}
      <Route path="register" component={Register} />

      <Route path="leagues" component={League} />

      <Route path="teams" component={Team} />

      {/* <Route path="register" component={Register} /> */}

      {/* <Route path="register" component={Register} /> */}

      {/* Catch all route */}
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
