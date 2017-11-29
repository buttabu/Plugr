import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, 
  REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, 
  LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE
} from './constants';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // ==================================
    // ============== LOAD ==============
    // ==================================

    case LOAD_USER_REQUEST:
      console.log('\nLOAD_USER_REQUEST', action);
      return {
        ...state,
        loading: true
      };
    case LOAD_USER_SUCCESS:
      console.log('\nLOAD_USER_SUCCESS', action);
      return {
        ...state,
        loading: false,
        loaded: true,
        accessToken: action.result.accessToken,
        user: action.result.user
      };
    case LOAD_USER_FAILURE:
      console.log('\nLOAD_USER_FAILURE', action);
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };

    // ===================================
    // ============== LOGIN ==============
    // ===================================

    case LOGIN_USER_REQUEST:
      console.log('\nLOGIN_USER_REQUEST', action);
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_USER_SUCCESS:
      console.log('\nLOGIN_USER_SUCCESS', action);
      return {
        ...state,
        loggingIn: false,
        accessToken: action.result.accessToken,
        user: action.result.user
      };
    case LOGIN_USER_FAILURE:
      console.log('\nLOGIN_USER_FAILURE', action);
      return {
        ...state,
        loggingIn: false,
        LOGIN_USERError: action.error
      };

    // ======================================
    // ============== REGISTER ==============
    // ======================================

    case REGISTER_USER_REQUEST:
      console.log('\nREGISTER_USER_REQUEST', action);
      return {
        ...state,
        registeringIn: true
      };
    case REGISTER_USER_SUCCESS:
      console.log('\nREGISTER_USER_SUCCESS', action);
      return {
        ...state,
        registeringIn: false
      };
    case REGISTER_USER_FAILURE:
      console.log('\nREGISTER_USER_FAILURE', action);
      return {
        ...state,
        registeringIn: false,
        registerError: action.error
      };

    // ====================================
    // ============== LOGOUT ==============
    // ====================================

    case LOGOUT_USER_REQUEST:
      console.log('\nLOGOUT_USER_REQUEST', action);
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_USER_SUCCESS:
      console.log('\nLOGOUT_USER_SUCCESS', action);
      return {
        ...state,
        loggingOut: false,
        accessToken: null,
        user: null
      };
    case LOGOUT_USER_FAILURE:
      console.log('\nLOGOUT_USER_FAILURE', action);
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error
      };
    default:
      return state;
  }
}

// =====================================
// ============== HELPERS ==============
// =====================================

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}
